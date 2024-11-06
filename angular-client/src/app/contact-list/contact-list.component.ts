import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { Router } from "@angular/router";

import type { Contact } from "../../shared/models/contact";
import { ContactService } from "../../shared/services/contact.service";

@Component({
	selector: "app-contact-list",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./contact-list.component.html",
	styleUrl: "./contact-list.component.css"
})
export class ContactListComponent implements OnInit {
	public contactList: Contact[] = [];

	constructor(private readonly contactService: ContactService, private readonly router: Router) {

	}

	public async ngOnInit(): Promise<void> {
		this.contactService.getContacts().subscribe(
			data => {
				this.contactList = data;
			}
		);
	};

	editContact(contactID: number) {
		this.router.navigate(["edit-contact", contactID]);
	}

	deleteContact(contactID: number) {
		const contact: Contact | undefined = this.contactList.find(contact => contact.ID === contactID);
		if (typeof (contact) === undefined) {
			console.log("Undefined contact reached on frontend during deletion!");
		} else {
			const contactName = `${contact!.FirstName  } ${  contact!.LastName}`;
			if (confirm("Are you sure to delete contact:" + ` ${  contactName  }?`)) {
				this.contactService.deleteContact(contactID).subscribe(
					() => {
						this.contactList = this.contactList.filter(
							contact => contact.ID !== contactID);
					}
				);
			}
		}
	};
}
