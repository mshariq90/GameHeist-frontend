import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  selectedUser: User = {
    fullName: '',
    email: '',
    mobile:'',
    password:''
  };

  constructor(private http: HttpClient) { }

  postUser (user: User){
    return this.http.post("http://localhost:3000/api/register",user);
  }
}
