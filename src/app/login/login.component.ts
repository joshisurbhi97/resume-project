import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { LoginModel } from '../model/login.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // myForm: NgForm
  // user = {
  //   FirstName: '',
  //   LastName: '',
  //   Password: ''
  // }
  user: LoginModel = new LoginModel();
  loginForm:FormGroup;
hide:true;




  constructor(
    private router: Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email':[this.user.email, [Validators.required,Validators.email]],
      'password':[this.user.password, [Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
    });
  }
  
  onLoginSubmit(){
    alert(this.user.email+''+this.user.password);
  }

}

