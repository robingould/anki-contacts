// Unfortunately we're using script-driven forms, so this is annoying to have
// on.
/* eslint-disable @typescript-eslint/unbound-method */
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Contact } from "../../shared/models/contact";
import { ContactService } from "../../shared/services/contact.service";
import { convertToISODateTime } from "../../shared/utils";

/**
 * AddContactComponent is the form that adds a new contact.
 */
@Component({
	imports: [ReactiveFormsModule, CommonModule],
	selector: "app-add-contact",
	standalone: true,
	styleUrl: "./add-contact.component.css",
	templateUrl: "./add-contact.component.html",
})
export class AddContactComponent {

	constructor(private readonly contactService: ContactService,
		private readonly router: Router) { }

	public contactForm = new FormGroup({
		Birthday: new FormControl(""),
		Email: new FormControl("", Validators.email),
		FirstName: new FormControl("", Validators.required),
		LastContacted: new FormControl(""),
		LastName: new FormControl("", Validators.required),
		PhoneNumber: new FormControl("", Validators.pattern(/^((\+\d{1,3}[- ]?)?\d{10})$/)),
	});

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

		this.contactService.createContact(contact).subscribe(
			c => {
				console.info("contact created:", c);
				this.router.navigate([""]);
			}
		);
	}
}
