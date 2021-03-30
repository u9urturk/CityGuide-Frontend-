import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router
    , private alertify: AlertifyService) {
      
     }
  path = "https://localhost:44359/api/auth"
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY="token"
  
  
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers  = headers.append("Content-Type","application/json")
    this.httpClient.post(this.path + "/login", loginUser,{headers:headers}).subscribe(data => {
      this.saveToken(data);
      this.userToken = data;
      
      this.decodedToken = this.jwtHelper.decodeToken(data.toString());
      this.alertify.success("Sisteme giriş yapıldı")
      this.router.navigateByUrl('/city')

    })
  }

  register(registerUser:RegisterUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    this.httpClient.post(this.path+"register",registerUser,{headers:headers}).subscribe(data=>{

    })
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token)
  }

  LogOut(){
    localStorage.removeItem(this.TOKEN_KEY)
    this.alertify.warning("Sistemden Başarıyla Çıkış yapıldı")
  }
  
  LoggedIn(){
    
   return this.jwtHelper.isTokenExpired(this.TOKEN_KEY)
  }

  get tokens(){
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUserId(){
    return this.jwtHelper.decodeToken(localStorage.getItem(this.tokens)).nameid
  }


}
