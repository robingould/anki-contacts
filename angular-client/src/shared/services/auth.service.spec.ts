/* eslint-disable @typescript-eslint/unbound-method */
import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import { TokenService } from "./token.service";

describe("AuthService", () => {
	let authService: AuthService;
	let tokenServiceSpy: jasmine.SpyObj<TokenService>;
	let routerSpy: jasmine.SpyObj<Router>;

	beforeEach(() => {
		const tokenService = jasmine.createSpyObj("TokenService", ["saveToken", "clearToken", "getToken"]);
		const router = jasmine.createSpyObj("Router", ["navigate"]);

		TestBed.configureTestingModule({
			providers: [
				{ provide: TokenService, useValue: tokenService },
				{ provide: Router, useValue: router },
			]
		});
		authService = TestBed.inject(AuthService);
		tokenServiceSpy = TestBed.inject(TokenService) as jasmine.SpyObj<TokenService>;
		routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
	});

	it("should be created", () => {
		expect(authService).toBeTruthy();
	});

	describe("login", () => {
		it("should save token and navigate to home", () => {
			authService.login("user", "pass");
			expect(tokenServiceSpy.saveToken).toHaveBeenCalledWith("userpassyayyippeeohgosh");
			expect(routerSpy.navigate).toHaveBeenCalledWith([""]);
		});
	});
	describe("logout", () => {
		it("should log you out, clear your cookies then redirect you home!", () => {
			authService.logout();
			expect(tokenServiceSpy.clearToken).toHaveBeenCalledWith();
			expect(routerSpy.navigate).toHaveBeenCalledWith([""]);
		});
	});
	describe("isLoggedIn", () => {
		it("should be true if correct token without redirecting", () => {
			const token = "c2lsbHlnb29zZXlheXlpcHBlZW9oZ29zaA==";
			tokenServiceSpy.getToken.and.returnValue(atob(token));
			expect(authService.isLoggedIn()).toBeTrue();
			expect(routerSpy.navigate).not.toHaveBeenCalled();
		});
		it("should be false and do a redirect if no token", () => {
			tokenServiceSpy.getToken.and.returnValue(null);
			expect(authService.isLoggedIn()).toBeFalse();
			expect(routerSpy.navigate).toHaveBeenCalledWith([""]);
		});
		it("should be false and do a redirect if wrong token", () => {
			tokenServiceSpy.getToken.and.returnValue("testchickennuggetdata");
			expect(authService.isLoggedIn()).toBeFalse();
			expect(routerSpy.navigate).toHaveBeenCalledWith([""]);
		});
	});
});
