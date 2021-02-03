import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:any={
    fname:null,
    lname:null,
    email:null,
    password:null
  };
  isSuccessful = false;
  isSignUpFailed=false;
  errorMessage='';

  constructor(private authService:AuthService) { }
  Roles: any = ['Admin', 'user'];

  ngOnInit(): void {
  }
  onSubmit():void{
    const{fname,lname,email,password}=this.form;
    this.authService.register(fname,lname,email,password).subscribe(
      data =>{
        console.log(data);
        this.isSuccessful=true;
        this.isSignUpFailed=false;
      },
      err=>{
        this.errorMessage=err.error.message;
        this.isSignUpFailed=true;
      }
    );
  }
}
