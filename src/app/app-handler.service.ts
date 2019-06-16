import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppHandlerService {
  pageLinks : boolean = false;

  baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getData(apiName){
    return this.http.get(this.baseURL + "/" + apiName);
  }
}
