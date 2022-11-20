import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorrelationIdInterceptor } from './correlation-id.interceptor';
import { ConfigOptions, CONFIG_OPTION } from './constants';

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
export class NgxCorrelationIdModule { 
  static withConfig(options: ConfigOptions): ModuleWithProviders<NgxCorrelationIdModule> {
    return {
      ngModule: NgxCorrelationIdModule,
      providers: [
        { provide: CONFIG_OPTION, useValue: options }
      ]
    };
  }
}
