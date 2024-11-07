import { Component } from "@angular/core";

import { ContactListComponent } from "../contact-list/contact-list.component";
import { ToContactComponent } from "../to-contact/to-contact.component";

@Component({
	imports: [ContactListComponent, ToContactComponent],
	selector: "app-home",
	standalone: true,
	styleUrl: "./home.component.css",
	templateUrl: "./home.component.html",
})
export class HomeComponent {

}
