import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetRequestService {
  query = null;
  constructor(private http: HttpClient) {}

  apiCall(query: string) {
    return this.http.get(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=` +
        query
    );
  }
}
