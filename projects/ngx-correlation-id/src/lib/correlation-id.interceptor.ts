import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { correlationId } from 'simple-correlation-id';
import { DEFAULT_HEADER, SYSTEM } from './constants';

@Injectable()
export class CorrelationIdInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(SYSTEM) private system: string = '') {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cid = correlationId(this.system);
    const cloneReq = request.clone({
      headers: request.headers.set(DEFAULT_HEADER, cid)
    });

    return next.handle(cloneReq);
  }
}
