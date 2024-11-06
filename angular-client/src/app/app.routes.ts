import { Routes } from "@angular/router";

import { AddContactComponent } from "./add-contact/add-contact.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { EditContactComponent } from "./edit-contact/edit-contact.component";
import { LoginComponent } from "./login/login.component";
import { SecretBaseComponent } from "./secret-base/secret-base.component";

import { secretBaseGuard } from "../shared/guards/secret-base.guard";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
	{
		component: HomeComponent,
		path: "",
		title: "Home Page",
	},
	{
		component: AddContactComponent,
		path: "add-contact",
		title: "Add Contact",
	},
	{
		component: EditContactComponent,
		path: "edit-contact/:id",
	},
	{
		component: LoginComponent,
		path: 'login',
	},
	{
		component: SecretBaseComponent,
		path: "secret-base",
		canActivate: [secretBaseGuard],
	}
];
