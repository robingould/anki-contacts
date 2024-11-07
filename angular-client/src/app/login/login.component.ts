import { Component } from "@angular/core";

import { AuthService } from "../../shared/services/auth.service";
/**
 * LoginComponent is the form for logging in.
 */
@Component({
	imports: [],
	selector: "app-login",
	standalone: true,
	styleUrl: "./login.component.css",
	templateUrl: "./login.component.html",
})
export class LoginComponent {

	constructor(private readonly authService: AuthService) {

	}
	/**
	 * Login is the method used for "logging in" to the webpage secret panel.
	 *
	 * @param username - The username the user is supposed to enter.
	 * @param password - The password the user is supposed to enter.
	 */
	public login(username: string, password: string): void {
		this.authService.login(username, password);
	}
}
