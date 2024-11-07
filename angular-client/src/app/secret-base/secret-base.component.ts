import { Component } from "@angular/core";

import { AuthService } from "../../shared/services/auth.service";

@Component({
	imports: [],
	selector: "app-secret-base",
	standalone: true,
	styleUrl: "./secret-base.component.css",
	templateUrl: "./secret-base.component.html",
})
export class SecretBaseComponent {

	constructor(private readonly authService: AuthService) {

	}

	logout(): void {
		this.authService.logout();
	}
}
