import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  public getContacts() {
    return this.http.get<Contact[]>(`${this.apiUrl}/contacts`)
  }

}
