import { Component, type OnInit } from "@angular/core";
import type { Contact } from "../../shared/models/contact";
import { ContactService } from "../../shared/services/contact.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-contact-list",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./contact-list.component.html",
	styleUrl: "./contact-list.component.css"
})
export class ContactListComponent implements OnInit {
	public contactList: Contact[] = [];

	constructor(private readonly contactService: ContactService) {

	}

	public async ngOnInit(): Promise<void> {
	this.contactService.getContacts().subscribe(
		data => {
			this.contactList = data;
		}
	);
	};
}
