import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddContactComponent } from "./add-contact.component";

describe("AddContactComponent", () => {
	let component: AddContactComponent;
	let fixture: ComponentFixture<AddContactComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AddContactComponent],
			providers: [
				provideHttpClient(),
				provideHttpClientTesting()
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(AddContactComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
