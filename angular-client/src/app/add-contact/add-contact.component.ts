import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from "../../shared/services/contact.service";
import { Contact } from "../../shared/models/contact";

@Component({
  selector: "app-add-contact",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./add-contact.component.html",
  styleUrl: "./add-contact.component.css"
})
export class AddContactComponent {

  constructor(private readonly contactService: ContactService, private readonly router: Router) {

  }

  contactForm = new FormGroup({
    FirstName: new FormControl("", Validators.required),
    LastName: new FormControl("", Validators.required),
    Email: new FormControl("", [Validators.email]),
    PhoneNumber: new FormControl("", [Validators.pattern('^((\\+\\d{1,3}[- ]?)?\\d{10})$')]),
    Birthday: new FormControl(""),
    LastContacted: new FormControl(""),
  });

  convertToISODateTime(dateString: string | null | undefined): string | null | undefined {
    if (dateString === null || dateString === undefined) {
      return dateString
    }
    const date = new Date(dateString);
    date.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00.000 in UTC

    const isoString = date.toISOString(); // Get the ISO string, e.g., "2024-11-04T00:00:00.000Z"
    return isoString.replace("Z", "-00:00"); // Replace the Z with -00:00
  }

  handleSubmit() {
    const contact: Contact = {
      ID: null,
      FirstName: this.contactForm.value.FirstName!,
      LastName: this.contactForm.value.LastName!,
      Email: this.contactForm.value.Email,
      PhoneNumber: this.contactForm.value.PhoneNumber,
      Birthday: this.convertToISODateTime(this.contactForm.value.Birthday),
      CreatedAt: null,
      LastContacted: this.convertToISODateTime(this.contactForm.value.LastContacted)
    }

    this.contactService.createContact(contact).subscribe(
      err => console.log(err),
      () => this.router.navigate([''])
    );
  }

}
