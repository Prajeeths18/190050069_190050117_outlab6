import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient,HttpErrorResponse } from '@angular/common/http';
import { FormInit } from '../form-init';
import {Observable,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const GET_URL="https://cs251-outlab-6.herokuapp.com/initial_values/";
const POST_URL="https://cs251-outlab-6.herokuapp.com/add_new_feedback/"
@Injectable()
export class FormService {
  constructor(
    private http:HttpClient
  ) { }
  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
}
  GET(): Observable<FormInit>{
    return this.http.get<FormInit>(GET_URL,{responseType:'json'})
    .pipe(
        catchError(this.handleError)

    );
  }
  POST(data:FormInit): Observable<FormInit>{
    return this.http.post<FormInit>(POST_URL,data,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
}