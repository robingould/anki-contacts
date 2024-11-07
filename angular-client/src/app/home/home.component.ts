import { Component } from "@angular/core";

import { ContactListComponent } from "../contact-list/contact-list.component";
import { ToContactComponent } from "../to-contact/to-contact.component";

/**
 * HomeComponent is home component which contains the contact list and to-contact components.
 */
@Component({
	imports: [ContactListComponent, ToContactComponent],
	selector: "app-home",
	standalone: true,
	styleUrl: "./home.component.css",
	templateUrl: "./home.component.html",
})
export class HomeComponent {

}
