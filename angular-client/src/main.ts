import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

bootstrapApplication(AppComponent, appConfig)
	// there's no higher context to throw to, so this is fine.
	// eslint-disable-next-line no-console
	.catch((err) => console.error(err));
