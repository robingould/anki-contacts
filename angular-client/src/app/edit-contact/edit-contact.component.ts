import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactService } from "../../shared/services/contact.service";
import { Contact } from "../../shared/models/contact";

@Component({
	selector: "app-edit-contact",
	standalone: true,
	imports: [],
	templateUrl: "./edit-contact.component.html",
	styleUrl: "./edit-contact.component.css"
})
export class EditContactComponent implements OnInit {
	public contact!: Contact;

constructor(
	private contactService: ContactService,
	private route: ActivatedRoute
) { }

ngOnInit() {
	this.route.params.subscribe(async (params) => {
		const contactID: number = params["id"];
		this.contactService.getContact(contactID).subscribe(
			(contactData: Contact) => {
				this.contact = contactData;
			}
		)
		});
	}
}
