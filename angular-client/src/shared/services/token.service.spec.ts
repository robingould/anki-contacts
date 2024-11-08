/* eslint-disable @typescript-eslint/unbound-method */
import { TestBed } from "@angular/core/testing";

import { TokenService } from "./token.service";

describe("TokenService", () => {
	let service: TokenService;
	let tokenServiceSpy: jasmine.SpyObj<TokenService>;

	beforeEach(() => {
		const tokenService = jasmine.createSpyObj("TokenService", ["saveToken", "clearToken", "getToken"]);
		TestBed.configureTestingModule({
			providers: [
				{ provide: TokenService, useValue: tokenService },
			]
		});
		service = TestBed.inject(TokenService);
		tokenServiceSpy = TestBed.inject(TokenService) as jasmine.SpyObj<TokenService>;
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	describe("saveToken", () => {
		it("should save token to local storage", () => {
			service.saveToken("yippewaow");
			expect(tokenServiceSpy.saveToken).toHaveBeenCalledWith("yippewaow");
		});
	});
	describe("getToken", () => {
		it("should get token from local storage", () => {
			tokenServiceSpy.getToken.and.returnValue("testtoken");
			expect(service.getToken()).toEqual("testtoken");
			tokenServiceSpy.getToken.and.returnValue(null);
			expect(service.getToken()).toBeNull();
		});
	});
	describe("clearToken", () => {
		it("should clear token from local storage", () => {
			tokenServiceSpy.getToken.and.returnValue("testtoken");
			expect(service.getToken()).toEqual("testtoken");
			tokenServiceSpy.getToken.and.returnValue(null);
			expect(service.getToken()).toBeNull();
		});
	});
});
