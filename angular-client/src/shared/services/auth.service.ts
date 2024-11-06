import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "./token.service";

@Injectable({
	providedIn: "root"
})
export class AuthService {

	constructor(
		private readonly tokenService: TokenService,
		private readonly router: Router
	) { 

	}

	login(username: string, password: string): void {
		this.tokenService.saveToken(
		(username ?? "")
		+ (password ?? "") 
		+ "yayyippeeohgosh"
		)
		this.router.navigate(['']);
	}

	logout(): void {
		this.tokenService.clearToken();
		this.router.navigate(['']);
	}

	isLoggedIn(): boolean {
		const token = this.tokenService.getToken();
		// yes, I know.
		if (!token || btoa(token) !== "c2lsbHlnb29zZXlheXlpcHBlZW9oZ29zaA==") {
		  this.router.navigate(['']);
		  return false;
		}
		return true;
	}
}
