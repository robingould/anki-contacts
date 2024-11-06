import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { ContactListComponent } from "./contact-list/contact-list.component";

/**
 * AppComponent is the main component for the app. It basically just serves to
 * contain the rest of it.
 */
@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, FormsModule, ContactListComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css"
})
export class AppComponent {
}
