import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from "./contact-list/contact-list.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, FormsModule, ContactListComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {

}
