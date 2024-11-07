import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactListComponent } from "./contact-list.component";

describe("ContactListComponent", () => {
	let component: ContactListComponent;
	let fixture: ComponentFixture<ContactListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ContactListComponent],
			providers: [
				provideHttpClient(),
				provideHttpClientTesting()
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ContactListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
