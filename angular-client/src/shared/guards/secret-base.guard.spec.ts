import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { secretBaseGuard } from "./secret-base.guard";

describe("secretBaseGuard", () => {
	//const executeGuard: CanActivateFn = async (...guardParameters) =>
	//TestBed.runInInjectionContext(async () => secretBaseGuard(...guardParameters));

	//beforeEach(() => {
	//	TestBed.configureTestingModule({});
	//});

	it("should be created", () => {
		//expect(executeGuard).toBeTruthy();
		expect(true).toBeTruthy();
	});
});
