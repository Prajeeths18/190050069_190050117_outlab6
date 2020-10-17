import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormInit } from '../form-init';
@Injectable({
  providedIn: 'root'
}
)
export class ContactService {

  constructor(
    private http:HttpClient
  ) { }
  getAdmins(){
      return this.http.get('/assets/admins.json');
  }
}