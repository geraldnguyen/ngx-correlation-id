import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorrelationIdInterceptor } from './correlation-id.interceptor';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CorrelationIdInterceptor, multi: true }
  ]
})
export class NgxCorrelationIdModule { }
