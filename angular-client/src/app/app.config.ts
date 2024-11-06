import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { loggerInterceptor } from "../shared/interceptor/logger.interceptor";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }), 
		provideRouter(routes), 
		provideHttpClient(withInterceptors([loggerInterceptor]))
	]
};
