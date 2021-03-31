import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router
    , private alertify: AlertifyService) {
      
     }
  path = "https://localhost:44359/api/auth"
  
  login(loginUser: LoginUser):Observable<any>{
    return this.httpClient.post(this.path + '/login',loginUser,httpOptions);
      
  }

  register(registerUser:RegisterUser):Observable<any>{
   return this.httpClient.post(this.path+'/register',registerUser,httpOptions);
  }

}
