import { Injectable } from "@angular/core";
/**
 * TokenService is a service which handles token logic for "user authentication"
 */
@Injectable({
	providedIn: "root"
})
export class TokenService {
	/**
	 * saveToken() is a method that saves your token string to local storage.
	 *
	 * @param token - the token you (hopefully) want saved.
	 */
	public saveToken(token: string): void {
		/* eslint-disable no-console */
		console.log("Saved token:", token);
		localStorage.setItem("token", token);
	}
	/**
	 * getToken() is a method that gets your token string from local storage.
	 *
	 * @returns The requested token or null if there is no token.
	 */
	public getToken(): string | null{
		const token = localStorage.getItem("token");
		if(token === null) {
			console.error("Token was null!");
		}
		return token;
	}
	/**
	 * clearToken() is a method that clears your token from local storage.
	 *
	 */
	public clearToken(): void {
		localStorage.removeItem("token");
	}
}
