import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contact';
import { ContactService } from '../../shared/services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contactList: Contact[] = [];

  constructor(private contactService: ContactService) {

  }

  async ngOnInit() {
    this.contactService.getContacts()
      .subscribe((data: Contact[]) => {
        this.contactList = data;
      }
      )
  };
}
