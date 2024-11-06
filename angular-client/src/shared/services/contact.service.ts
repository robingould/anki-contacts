import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Contact } from "../models/contact";

/**
 * ContactService handles API requests dealing with contacts; retrieving,
 * editing, creating, and deleting them.
 */
@Injectable({
	providedIn: "root"
})
export class ContactService {
	private readonly apiUrl = "http://localhost:8080";

	constructor(private readonly http: HttpClient) { }

	/**
	 * Creates a new Contact.
	 *
	 * @param contact The contact being created.
	 * @returns The newly created Contact (with server-generated properties
	 * filled in).
	 */
	public createContact(contact: Contact): Observable<Contact> {
		return this.http.post<Contact>(`${this.apiUrl}/contacts`, { contact }.contact);
	}

	/**
	 * Gets a specific Contact.
	 *
	 * @param id The specific Contact to retrieve.
	 * @returns The requested Contact.
	 */
	public getContact(id: number): Observable<Contact> {
		return this.http.get<Contact>(`${this.apiUrl}/contacts/${id}`);
	}

	/**
	 * Gets every contact stored in the database.
	 *
	 * @returns All Contacts in the app.
	 */
	public getContacts(): Observable<Contact[]> {
		return this.http.get<Contact[]>(`${this.apiUrl}/contacts`);
	}

	/**
	 * Replaces a contact with a new representation thereof.
	 *
	 * @param contact The new definition of the Contact.
	 * @returns The edited contact.
	 */
	public updateContact(contact: Contact): Observable<Contact> {
		return this.http.put<Contact>(`${this.apiUrl}/contacts`, { contact }.contact);
	}

	/**
	 * Deletes a contact.
	 *
	 * @param id The ID of the contact to delete.
	 * @returns The deleted Contact.
	 */
	public deleteContact(id: number): Observable<Contact> {
		return this.http.delete<Contact>(`${this.apiUrl}/contacts/${id}`);
	}

}
