import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { HoverEffectDirective } from "../../shared/directives/hover-effect.directive";
import type { Contact } from "../../shared/models/contact";
import { ContactService } from "../../shared/services/contact.service";

/**
 * ContactListComponent is the actual list of contacts. Basically the meat of
 * the app, really.
 */
@Component({
	imports: [CommonModule, HoverEffectDirective],
	selector: "app-contact-list",
	standalone: true,
	styleUrl: "./contact-list.component.css",
	templateUrl: "./contact-list.component.html",
})
export class ContactListComponent implements OnInit {
	public contactList: Contact[] = [];

	constructor(
		private readonly contactService: ContactService,
		private readonly router: Router
	) {

	}

	/** Angular lifecycle hook. */
	public ngOnInit(): void {
		this.contactService.getContacts().subscribe(
			data => {
				this.contactList = data;
			}
		);
	};

	/**
	 * Handles a user clicking on the "Edit" button for a contact.
	 *
	 * @param contactID The ID of the contact being edited.
	 */
	public editContact(contactID: number): void {
		this.router.navigate(["edit-contact", contactID]);
	}

	/**
	 * Handles a user clicking on the "Delete" button for a contact.
	 *
	 * @param contact The ID of the contact being deleted.
	 */
	public deleteContact(contact: Contact): void {
		if (contact.ID === null || contact.ID === undefined) {
			console.error("Undefined contact ID reached on frontend during deletion!");
			return;
		}

		const contactName = `${contact.FirstName} ${contact.LastName}`;
		if (confirm("Are you sure to delete contact:" + ` ${  contactName  }?`)) {
			this.contactService.deleteContact(contact.ID).subscribe(
				() => {
					this.contactList = this.contactList.filter(
						c => c.ID !== contact.ID);
				}
			);
		}
	};
}
