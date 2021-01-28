import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetRequestService } from './getRequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private getRequest: GetRequestService) {}
  title = 'wiki';
  apiValue: any;

  receivedQuery(event: string) {
    console.log('Received in app component from search', event);
    this.getRequest.apiCall(event).subscribe((res) => {
      this.apiValue = res;
      this.apiValue = this.apiValue.query.search;
    });
    // console.log(this.apiValue);
  }
}
