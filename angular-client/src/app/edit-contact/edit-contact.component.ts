import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "../../shared/services/contact.service";
import { Router } from "@angular/router";
import { Contact } from "../../shared/models/contact";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-edit-contact",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./edit-contact.component.html",
	styleUrl: "./edit-contact.component.css"
})
export class EditContactComponent implements OnInit {
	public contact!: Contact;
	contactLoaded!: Promise<boolean>;
	contactForm!: FormGroup;

constructor(
	private contactService: ContactService,
	private route: ActivatedRoute,
	private readonly router: Router
) { }

ngOnInit() {
	this.route.params.subscribe(async (params) => {
		const contactID: number = params["id"];
		this.contactService.getContact(contactID).subscribe(
			(contactData: Contact) => 
				{ 
					this.contact = contactData; 
					this.contactLoaded = Promise.resolve(true);
					this.setFormGroup();
				}
		)
	});
}

private setFormGroup() {
	this.contactForm = new FormGroup({
		FirstName: new FormControl(this.contact.FirstName, Validators.required),
		LastName: new FormControl(this.contact.LastName, Validators.required),
		Email: new FormControl(this.contact.Email, [Validators.email]),
		PhoneNumber: new FormControl(this.contact.PhoneNumber, [Validators.pattern('^((\\+\\d{1,3}[- ]?)?\\d{10})$')]),
		Birthday: new FormControl(this.contact.Birthday),
		LastContacted: new FormControl(this.contact.LastContacted),
	});
}


convertToISODateTime(dateString: string | null | undefined): string | null | undefined {
	if (dateString === null || dateString === undefined) {
		return dateString
	}
	const date = new Date(dateString);
	date.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00.000 in UTC
	const isoString = date.toISOString(); // Get the ISO string, e.g., "2024-11-04T00:00:00.000Z"
	return isoString.replace("Z", "-00:00"); // Replace the Z with -00:00
}

handleSubmit() {
	const contact: Contact = {
		ID: null,
		FirstName: this.contactForm.value.FirstName!,
		LastName: this.contactForm.value.LastName!,
		Email: this.contactForm.value.Email,
		PhoneNumber: this.contactForm.value.PhoneNumber,
		Birthday: this.convertToISODateTime(this.contactForm.value.Birthday),
		CreatedAt: null,
		LastContacted: this.convertToISODateTime(this.contactForm.value.LastContacted)
	}

	this.contactService.updateContact(contact).subscribe(
		err => console.log(err),
		() => this.router.navigate([''])
		);
	}

}
