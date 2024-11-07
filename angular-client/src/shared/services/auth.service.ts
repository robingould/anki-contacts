import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { TokenService } from "./token.service";
/**
 * AuthService is a service which handles all your "user authentication" logic
 * Log in! Log out! Are you logged in? The options aren't exactly endless but they're there!
 */
@Injectable({
	providedIn: "root"
})
export class AuthService {

	constructor(
		private readonly tokenService: TokenService,
		private readonly router: Router
	) {

	}
	/**
	 * login() is a method which handles logging in and checking the correctness of the username
	 * password combo. This saves your token based on your user + pass as well and also redirects
	 * the browser home.
	 *
	 * @params username - the username you want to log in with
	 * @params password - the password you want to log in with
	 */
	public login(username: string, password: string): void {
		this.tokenService.saveToken(
			`${(username ?? "")
		+ (password ?? "")
			}yayyippeeohgosh`
		);
		this.router.navigate([""]);
	}
	/**
	 * logout() is a method that logs you out, clears your cookies then redirects you home!
	 */
	public logout(): void {
		this.tokenService.clearToken();
		this.router.navigate([""]);
	}
	/**
	 * isLoggedIn() is a method that checks if you're logged in via sketchy logic, for fun.
	 *
	 * @returns boolean implying whether or not you're logged in after redirecting the browser home if you aren't.
	 */
	public isLoggedIn(): boolean {
		const token = this.tokenService.getToken();
		// yes, I know.
		if (!token || btoa(token) !== "c2lsbHlnb29zZXlheXlpcHBlZW9oZ29zaA==") {
			this.router.navigate([""]);
			return false;
		}
		return true;
	}
}
