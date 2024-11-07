import { Component } from "@angular/core";

import { AuthService } from "../../shared/services/auth.service";

@Component({
	selector: "app-secret-base",
	standalone: true,
	imports: [],
	templateUrl: "./secret-base.component.html",
	styleUrl: "./secret-base.component.css"
})
export class SecretBaseComponent {

	constructor(private readonly authService: AuthService) {

	}

	logout(): void {
		this.authService.logout();
	}
}
