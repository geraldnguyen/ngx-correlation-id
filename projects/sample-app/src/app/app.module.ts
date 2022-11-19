import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgxCorrelationIdModule } from 'ngx-correlation-id';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCorrelationIdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
