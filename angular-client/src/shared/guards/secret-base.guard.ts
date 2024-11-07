import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

import { AuthService } from "../services/auth.service";

export const secretBaseGuard: CanActivateFn = (
	next: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	const authService = inject(AuthService);
	console.log(authService.isLoggedIn());
	return authService.isLoggedIn();
};
