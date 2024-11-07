import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

/**
 * AppComponent is the main component for the app. It basically just serves to
 * contain the rest of it.
 */
@Component({
	imports: [RouterOutlet],
	selector: "app-root",
	standalone: true,
	styleUrl: "./app.component.css",
	templateUrl: "./app.component.html",
})
export class AppComponent {
}
