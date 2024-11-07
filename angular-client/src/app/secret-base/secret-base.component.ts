import { Component } from "@angular/core";

import { AuthService } from "../../shared/services/auth.service";
/**
 * SecretBaseComponent. Well, sorry I can't tell you.
 * It's a SECRET Base, see? Sorry...
 */
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
	/**
	 * Logs out of the secret base and "covers tracks".
	 *
	 */
	public logout(): void {
		this.authService.logout();
	}
}
