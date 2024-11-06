import { Routes } from "@angular/router";

import { AddContactComponent } from "./add-contact/add-contact.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { EditContactComponent } from "./edit-contact/edit-contact.component";

export const routes: Routes = [
	{
		component: ContactListComponent,
		path: "",
		title: "Contact List Page",
	},
	{
		component: AddContactComponent,
		path: "add-contact",
		title: "Add Contact",
	},
	{
		component: EditContactComponent,
		path: "edit-contact/:id",
	}
];
