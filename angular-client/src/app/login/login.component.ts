import { Component } from "@angular/core";

import { AuthService } from "../../shared/services/auth.service";

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

	login(username: string, password: string): void {
		this.authService.login(username, password);
	}
}
