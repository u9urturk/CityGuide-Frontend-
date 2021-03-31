import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm:FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
 
  registerUser:any={};
  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
   private alertify:AlertifyService,
   private router:Router) { }

    
  ngOnInit(): void {
    this.createRegisterForm();

  }

  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      userName:["",Validators.required],
      password:["",[Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)]],
      confirmPassword:["",Validators.required]
    },
    {validator:this.passwordMatchValidator}
    
    )
  }

  passwordMatchValidator(g:FormGroup){
    return g.get('password').value === g.get('confirmPassword').value?null:{mismatch:true}
  }
  
  goCity(url:string){
    this.router.navigateByUrl(url)
  }

  register(){
    if(this.registerForm.valid){
      this.registerUser = Object.assign({},this.registerForm.value)
      this.authService.register(this.registerUser).subscribe(data=>{
        //console.log(data)
        this.alertify.success("Kayıt Başarılı, Anasayfaya yönlendiriliyorsunuz");
        this.isSignUpFailed=false;
        this.isSuccessful=true;
        setTimeout(()=>this.goCity("/city"),1500)
        

      },err=>{
        this.alertify.warning("Kayıt gerçekleştirilemedi")
        this.isSignUpFailed=true;
      })
      
    }

    
  } 

}
