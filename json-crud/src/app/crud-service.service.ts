import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  private apiServer = "http://localhost:61980/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/product/')
    
  }

  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/product/' + id)
  }

  create(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/product/', JSON.stringify(product), this.httpOptions)
  }
  
  update(id, product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/product/' + id, JSON.stringify(product), this.httpOptions)
  }

  
  delete(id): Observable<Product>{
    return this.httpClient.delete<Product>(this.apiServer + '/product/' + id)
  
  }
  
}
