import { Component, OnInit } from "@angular/core";
import { ContactService } from "../../shared/services/contact.service";
import { Contact } from "../../shared/models/contact";
import { CommonModule } from "@angular/common";
import { HoverEffectDirective } from "../../shared/directives/hover-effect.directive";

@Component({
	selector: "app-to-contact",
	standalone: true,
	imports: [CommonModule, HoverEffectDirective],
	templateUrl: "./to-contact.component.html",
	styleUrl: "./to-contact.component.css"
})
export class ToContactComponent implements OnInit {
	public toContactList: Contact[] = [];

	constructor (
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
					(a, b) => {
						return Date.parse(a.LastContacted!) - Date.parse(b.LastContacted!)
					}
				)
				const filteredData = sortedData.filter(contact => 
					{
						const date = new Date(contact.LastContacted!);
						return date <= weekEarlier;
					}
				)	
				this.toContactList = filteredData;
			}
		);
	};
}
