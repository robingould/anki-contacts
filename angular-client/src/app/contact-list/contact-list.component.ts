import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../shared/models/contact';
import { ContactService } from '../../shared/services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  //@Input() contactList: Contact[] = [];

  constructor(private contactService: ContactService) {

  }

  async ngOnInit() {

  };

}
