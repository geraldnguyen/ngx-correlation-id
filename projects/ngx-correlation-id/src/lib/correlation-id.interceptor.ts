import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { correlationId } from 'simple-correlation-id';
import { DEFAULT_HEADER, CONFIG_OPTION, ConfigOptions } from './constants';

@Injectable()
export class CorrelationIdInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(CONFIG_OPTION) private options: ConfigOptions = '') {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cid = correlationId();
    let header = DEFAULT_HEADER;

    if (typeof this.options === 'string') {
      const system = this.options;
      cid = correlationId(system);
    } else if (Array.isArray(this.options)) {
      const system = this.options[0];
      header = this.options[1];
      cid = correlationId(system);
    } else if (this.options !== null) {
      const system = this.options.system;
      header = this.options.header;
      cid = correlationId(system);
    }

    const cloneReq = request.clone({
      headers: request.headers.set(header, cid)
    });

    return next.handle(cloneReq);
  }
}
