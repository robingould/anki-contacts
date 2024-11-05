import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactService } from "../../shared/services/contact.service";
import { Contact } from "../../shared/models/contact";

@Component({
  selector: "app-edit-contact",
  standalone: true,
  imports: [],
  templateUrl: "./edit-contact.component.html",
  styleUrl: "./edit-contact.component.css"
})
export class EditContactComponent implements OnInit {
  public contactID = 0;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.contactID = params["id"];
      //this.contact = await this.contactService.getContact(contactID);
    });
  }
}
