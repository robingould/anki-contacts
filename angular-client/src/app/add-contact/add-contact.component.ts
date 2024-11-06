import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Contact } from "../../shared/models/contact";
import { ContactService } from "../../shared/services/contact.service";

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

	contactForm = new FormGroup({
		Birthday: new FormControl(""),
		Email: new FormControl("", [Validators.email]),
		FirstName: new FormControl("", Validators.required),
		LastContacted: new FormControl(""),
		LastName: new FormControl("", Validators.required),
		PhoneNumber: new FormControl("", [Validators.pattern("^((\\+\\d{1,3}[- ]?)?\\d{10})$")]),
	});

	/**
	 * Converts a date to an ISO format.
	 *
	 * @param dateString The date being converted.
	 * @returns The converted date.
	 */
	convertToISODateTime(dateString: string | null | undefined): string | null | undefined {
		if (dateString === null || dateString === undefined) {
			return dateString;
		}
		const date = new Date(dateString);
		date.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00.000 in UTC
		const isoString = date.toISOString(); // Get the ISO string, e.g., "2024-11-04T00:00:00.000Z"
		return isoString.replace("Z", "-00:00"); // Replace the Z with -00:00
	}

	/**
	 * Handles submission of the form.
	 */
	handleSubmit() {
		const contact: Contact = {
			Birthday: this.convertToISODateTime(this.contactForm.value.Birthday),
			CreatedAt: null,
			Email: this.contactForm.value.Email,
			FirstName: this.contactForm.value.FirstName!,
			ID: null,
			LastContacted: this.convertToISODateTime(this.contactForm.value.LastContacted),
			LastName: this.contactForm.value.LastName!,
			PhoneNumber: this.contactForm.value.PhoneNumber,
		};

		this.contactService.createContact(contact).subscribe(
			err => console.log(err),
			async () => this.router.navigate([""])
		);
	}
}
