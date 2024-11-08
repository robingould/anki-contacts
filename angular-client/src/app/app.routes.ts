import { Routes } from "@angular/router";

import { secretBaseGuard } from "../shared/guards/secret-base.guard";

import { AddContactComponent } from "./add-contact/add-contact.component";
import { EditContactComponent } from "./edit-contact/edit-contact.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SecretBaseComponent } from "./secret-base/secret-base.component";

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
		path: "login",
	},
	{
		canActivate: [secretBaseGuard],
		component: SecretBaseComponent,
		path: "secret-base",
	}
];
