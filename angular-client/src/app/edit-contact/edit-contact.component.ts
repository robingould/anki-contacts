// Unfortunately we're using script-driven forms, so this is annoying to have
// on.
/* eslint-disable @typescript-eslint/unbound-method */
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute , Router } from "@angular/router";

import { Contact } from "../../shared/models/contact";
import { ContactService } from "../../shared/services/contact.service";
import { convertToISODateTime, controlDateFormat } from "../../shared/utils";

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
	public contact: Contact = {
		Birthday: undefined,
		CreatedAt: undefined,
		Email: undefined,
		FirstName: "",
		ID: undefined,
		LastContacted: undefined,
		LastName: "",
		PhoneNumber: undefined
	};
	public contactLoaded = new Promise<boolean>(r => r(false));
	public contactForm = new FormGroup({
		Birthday: new FormControl(""),
		Email: new FormControl("", Validators.email),
		FirstName: new FormControl("", Validators.required),
		LastContacted: new FormControl(""),
		LastName: new FormControl("", Validators.required),
		PhoneNumber: new FormControl("", Validators.pattern(/^((\+\d{1,3}[- ]?)?\d{10})$/)),
	});
	public contactID = 0;

	constructor(
		private readonly contactService: ContactService,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) {

	}

	/** Angular lifecycle hook. */
	public ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.contactID = params["id"];
			this.contactService.getContact(this.contactID).subscribe(
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
		this.contactForm.controls.Birthday.setValue(controlDateFormat(this.contact.Birthday) ?? null);
		this.contactForm.controls.Email.setValue(this.contact.Email ?? null);
		this.contactForm.controls.FirstName.setValue(this.contact.FirstName);
		this.contactForm.controls.LastContacted.setValue(controlDateFormat(this.contact.LastContacted) ?? null);
		this.contactForm.controls.LastName.setValue(this.contact.LastName);
		this.contactForm.controls.PhoneNumber.setValue(this.contact.PhoneNumber ?? null);
	}

	/**
	 * Handles submission of the form.
	 */
	public handleSubmit(): void {
		// property names being extracted, so it's fine
		// eslint-disable-next-line @typescript-eslint/naming-convention
		const {FirstName, LastName} = this.contactForm.value;
		if (!FirstName || !LastName) {
			console.error("this should not be possible, but unfortunately we're using script-driven forms so... null first or last name");
			console.info("FirstName:", FirstName);
			console.info("LastName:", LastName);
			return;
		}

		const contact: Contact = {
			Birthday: convertToISODateTime(this.contactForm.value.Birthday),
			CreatedAt: null,
			Email: this.contactForm.value.Email,
			FirstName,
			ID: null,
			LastContacted: convertToISODateTime(this.contactForm.value.LastContacted),
			LastName,
			PhoneNumber: this.contactForm.value.PhoneNumber,
		};

		this.contactService.updateContact(contact, this.contactID).subscribe(
			c => {
				console.info("contact updated:", c);
				this.router.navigate([""]);
			}
		);
	}

}
