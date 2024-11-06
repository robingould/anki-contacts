import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { ContactListComponent } from "./contact-list/contact-list.component";

/**
 * AppComponent is the main component for the app. It basically just serves to
 * contain the rest of it.
 */
@Component({
	imports: [RouterOutlet, FormsModule, ContactListComponent],
	selector: "app-root",
	standalone: true,
	styleUrl: "./app.component.css",
	templateUrl: "./app.component.html",
})
export class AppComponent {
}
