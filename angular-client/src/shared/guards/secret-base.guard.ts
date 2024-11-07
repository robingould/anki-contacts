import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";

import { AuthService } from "../services/auth.service";

export const secretBaseGuard: CanActivateFn = (
) => {
	const authService = inject(AuthService);
	console.log(authService.isLoggedIn());
	return authService.isLoggedIn();
};
