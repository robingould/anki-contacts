import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Contact } from '../shared/models/contact';
import { ContactListComponent } from "./contact-list/contact-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ContactListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contactList: Contact[] = [
    new Contact(
      "01",
      "Alice",
      "Glassoline",
      "yippee@waow.gov",
      "+1234567890",
      "10-20-2024",
      "10-20-2024",
      "10-20-2024",
    ),
    new Contact(
      "02",
      "Blob",
      "Salamander",
      "yippee@wtest.gov",
      "+9876543210",
      "10-20-2024",
      "10-20-2024",
      "10-20-2024",
    )
  ]
}
