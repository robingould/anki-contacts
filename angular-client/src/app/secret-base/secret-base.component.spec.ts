import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SecretBaseComponent } from "./secret-base.component";

describe("SecretBaseComponent", () => {
	let component: SecretBaseComponent;
	let fixture: ComponentFixture<SecretBaseComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SecretBaseComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(SecretBaseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
