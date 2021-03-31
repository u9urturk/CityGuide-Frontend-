import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private router:Router,
    private tokenStorage:TokenStorageService,
    private alertify:AlertifyService
    ) { }
  loginForm:FormGroup;
  loginUser:any={};
 
  token:any;
  name:string;
  
  isLoggedIn = false;
  isLoginFailed = false;
  
  

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      //this.alertify.success("get token çalıştı")
      this.isLoggedIn=true;
    }

    
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser();
      if(user){
        //this.alertify.success("user başarılı")
        //console.log(user)
        this.name=user.name
        //console.log(this.name)
      }
    }
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    this.authService.login(this.loginUser).subscribe(data=>{
      console.log(data);
      this.tokenStorage.saveToken(data);
      this.tokenStorage.saveUser(data);
      this.isLoginFailed=false;
      this.alertify.success("Giriş Başarılı")
      this.isLoggedIn=true;
      
      
    },
    err=>{
      this.alertify.warning("Giriş işlemi başarısız")
      this.isLoginFailed=true;
    })
  }

  
  reloadPage():void{

    window.location.reload();
  }

  logOut():void{
    this.tokenStorage.singOut();
    this.alertify.warning("Çıkış Yapılıyor")
    setTimeout(this.reloadPage,1000)
    
  }
  
    
  
  

  

}
