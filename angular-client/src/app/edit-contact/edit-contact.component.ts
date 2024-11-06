// Unfortunately we're using script-driven forms, so this is annoying to have
// on.
/* eslint-disable @typescript-eslint/unbound-method */
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute , Router } from "@angular/router";

import { Contact } from "../../shared/models/contact";
import { ContactService } from "../../shared/services/contact.service";
import { convertToISODateTime } from "../../shared/utils";

/**
 * EditContactComponent is the form for editing an existing contact.
 */
@Component({
	imports: [CommonModule, ReactiveFormsModule],
	selector: "app-edit-contact",
	standalone: true,
	styleUrl: "./edit-contact.component.css",
	templateUrl: "./edit-contact.component.html",
})
export class EditContactComponent implements OnInit {
	public contact!: Contact;
	public contactLoaded!: Promise<boolean>;
	public contactForm!: FormGroup;

	constructor(
		private readonly contactService: ContactService,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) { }

	/** Angular lifecycle hook. */
	public ngOnInit(): void {
		this.route.params.subscribe((params) => {
			const contactID: number = params["id"];
			this.contactService.getContact(contactID).subscribe(
				(contactData: Contact) => {
					this.contact = contactData;
					this.contactLoaded = Promise.resolve(true);
					this.setFormGroup();
				}
			);
		});
	}

	/**
	 * Resets the form group.
	 */
	private setFormGroup(): void {
		this.contactForm = new FormGroup({
			Birthday: new FormControl(this.contact.Birthday),
			Email: new FormControl(this.contact.Email, [Validators.email]),
			FirstName: new FormControl(this.contact.FirstName, Validators.required),
			LastContacted: new FormControl(this.contact.LastContacted),
			LastName: new FormControl(this.contact.LastName, Validators.required),
			PhoneNumber: new FormControl(this.contact.PhoneNumber, [Validators.pattern("^((\\+\\d{1,3}[- ]?)?\\d{10})$")]),
		});
	}

	/**
	 * Handles submission of the form.
	 */
	public handleSubmit(): void {
		const contact: Contact = {
			Birthday: convertToISODateTime(this.contactForm.value.Birthday),
			CreatedAt: null,
			Email: this.contactForm.value.Email,
			FirstName: this.contactForm.value.FirstName!,
			ID: null,
			LastContacted: convertToISODateTime(this.contactForm.value.LastContacted),
			LastName: this.contactForm.value.LastName!,
			PhoneNumber: this.contactForm.value.PhoneNumber,
		};

		this.contactService.updateContact(contact).subscribe(
			c => {
				console.info("contact updated:", c);
				this.router.navigate([""]);
			}
		);
	}

}
