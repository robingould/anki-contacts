import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class TokenService {

  saveToken(token: string): void {
    console.log("Saved token:", token);
    localStorage.setItem('token', token);
  }

  getToken(): string | null{
    const token = localStorage.getItem('token');
    if(token === null) {
      console.error("Token was null!")
    }
    return token;
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
