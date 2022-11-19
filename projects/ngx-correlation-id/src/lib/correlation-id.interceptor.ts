import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { correlationId } from 'simple-correlation-id';

@Injectable()
export class CorrelationIdInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cid = correlationId();
    const cloneReq = request.clone({
      headers: request.headers.set('x-correlation-id', cid)
    });

    return next.handle(cloneReq);
  }
}
