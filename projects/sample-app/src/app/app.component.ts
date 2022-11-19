import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
  echoResponse = 'Please make a request first';

  constructor(private http: HttpClient) { }

  makeHttpRequest() {
    this.http.get('https://echook.azurewebsites.net/echo')
      .subscribe(resp => {
        this.echoResponse = JSON.stringify(resp, null, 2);
      });
  }

  reset() {
    this.echoResponse = '';
  }
}
