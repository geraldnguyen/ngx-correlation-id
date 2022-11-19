import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';

  constructor(http: HttpClient) {
    http.get('https://echook.azurewebsites.net/echo', {
    }).subscribe();
  }
}
