import { Component } from "@angular/core";
import { ContactListComponent } from "../contact-list/contact-list.component";
import { ToContactComponent } from "../to-contact/to-contact.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [ContactListComponent, ToContactComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css"
})
export class HomeComponent {

}
