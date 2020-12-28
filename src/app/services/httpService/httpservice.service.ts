import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  post(url, data) {
    console.log(" data in http ", data);
    
   return this.http.post(this.baseUrl + url, data);

  }

  get() {

  }

  update() {

  }
  delete() {

  }

}
