import { HttpEvent, HttpEventType, HttpHandlerFn,HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export const loggerInterceptor: HttpInterceptorFn = (
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => next(req).pipe(tap(event => {
	if (event.type === HttpEventType.Response) {
		console.info(req.url, "returned a response with status", event.status);
	}
}));
