import { Component, Input } from '@angular/core';
import { Contact } from '../../shared/models/contact';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  @Input() contactList: Contact[] = [];
}
