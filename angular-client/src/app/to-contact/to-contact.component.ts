import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

import { HoverEffectDirective } from "../../shared/directives/hover-effect.directive";
import { Contact } from "../../shared/models/contact";
import { SadIfyPipe } from "../../shared/pipes/sad-ify.pipe";
import { ContactService } from "../../shared/services/contact.service";

@Component({
	imports: [CommonModule, HoverEffectDirective, SadIfyPipe],
	selector: "app-to-contact",
	standalone: true,
	styleUrl: "./to-contact.component.css",
	templateUrl: "./to-contact.component.html",
})
export class ToContactComponent implements OnInit {
	public toContactList: Contact[] = [];

	constructor(
		private readonly contactService: ContactService,
	) {

	}
	public ngOnInit(): void {
		this.contactService.getContacts().subscribe(
			data => {
				const today = new Date();
				const weekEarlier = new Date();
				weekEarlier.setDate(today.getDate() - 7);
				const sortedData = data.sort(
					(a, b) => Date.parse(a.LastContacted ?? "") - Date.parse(b.LastContacted ?? "")
				);
				const filteredData = sortedData.filter(contact => {
					const date = new Date(contact.LastContacted ?? "");
					return date <= weekEarlier;
				}
				);
				this.toContactList = filteredData;
			}
		);
	};
}
