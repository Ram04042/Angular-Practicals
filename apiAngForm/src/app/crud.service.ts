import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  private apiServer = "http://localhost:54037/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  
  create(user): Observable<User> {
    return this.httpClient.post<User>(this.apiServer + '/User/', JSON.stringify(user), this.httpOptions)
  }

  check(luser): Observable<loginuser> {
    return this.httpClient.post<loginuser>(this.apiServer + '/Login/', JSON.stringify(luser), this.httpOptions)
  }
  
}

export class loginuser
{
  Email_ID:string;
  Password:string;
  message: string;
}