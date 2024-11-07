import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";

import { Contact } from "../../shared/models/contact";
import { ContactService } from "../../shared/services/contact.service";

import { EditContactComponent } from "./edit-contact.component";

describe("EditContactComponent", () => {
	let component: EditContactComponent;
	let fixture: ComponentFixture<EditContactComponent>;
	let mockContactService: jasmine.SpyObj<ContactService>;

	const mockContact: Contact = {
		Birthday: "1980-01-01T00:00:00Z",
		CreatedAt: "2020-01-01T00:00:00Z",
		Email: "tester@works.gov",
		FirstName: "silly",
		ID: 1,
		LastContacted: "2024-01-01T00:00:00Z",
		LastName: "gooze",
		PhoneNumber: "1234567890",
	};

	beforeEach(async () => {
		mockContactService = jasmine.createSpyObj("ContactService", ["getContact", "updateContact"]);
		mockContactService.getContact.and.returnValue(of(mockContact));
		await TestBed.configureTestingModule({
			imports: [EditContactComponent],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: { params: of({ id: 1 }) }
				},
				{ provide: ContactService, useValue: mockContactService },
				provideHttpClient(),
				provideHttpClientTesting()
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(EditContactComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
