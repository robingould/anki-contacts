import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ToContactComponent } from "./to-contact.component";

describe("ToContactComponent", () => {
	let component: ToContactComponent;
	let fixture: ComponentFixture<ToContactComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ToContactComponent],
			providers: [
				provideHttpClient(),
				provideHttpClientTesting()
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ToContactComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
