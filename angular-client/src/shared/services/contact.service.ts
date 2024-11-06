import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Contact } from "../models/contact";

@Injectable({
	providedIn: "root"
})
export class ContactService {
	private readonly apiUrl = "http://localhost:8080";

	constructor(private readonly http: HttpClient) { }

	public createContact(contact: Contact): Observable<Contact> {
		return this.http.post<Contact>(`${this.apiUrl}/contacts`, { contact }.contact);
	}

	public getContact(id: number): Observable<Contact> {
		return this.http.get<Contact>(`${this.apiUrl}/contacts/${id}`);
	}

	public getContacts(): Observable<Contact[]> {
		return this.http.get<Contact[]>(`${this.apiUrl}/contacts`);
	}

	public updateContact(contact: Contact): Observable<Contact> {
		return this.http.put<Contact>(`${this.apiUrl}/contacts`, { contact }.contact);
	}

	public deleteContact(id: number): Observable<Contact> {
		return this.http.delete<Contact>(`${this.apiUrl}/contacts/${id}`);
	}

}
