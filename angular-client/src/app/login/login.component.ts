import { Component } from "@angular/core";

import { AuthService } from "../../shared/services/auth.service";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css"
})
export class LoginComponent {

	constructor(private readonly authService: AuthService) {

	}

	login(username: string, password: string): void {
		this.authService.login(username, password);
	}
}
