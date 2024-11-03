import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = "/url"

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<Contact[]> {

    return this.http.get<Contact[]>(`${this.apiUrl}/contacts`)
  }

}
