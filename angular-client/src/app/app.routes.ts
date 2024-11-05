import { Routes } from "@angular/router";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { AddContactComponent } from "./add-contact/add-contact.component";

export const routes: Routes = [
    {
        path: "",
        title: "Contact List Page",
        component: ContactListComponent,
    },
    {
        path: "add-contact",
        title: "Add Contact",
        component: AddContactComponent
    }
];
