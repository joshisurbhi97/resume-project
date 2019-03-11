import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonalinfoModel } from '../model/personalinfo.model';
import {Router} from "@angular/router";


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  user: PersonalinfoModel = new PersonalinfoModel();
  personalinfoForm:FormGroup;
  hide:true;
  
  constructor(
    private router: Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit() {
    this.personalinfoForm = this.formBuilder.group({
      'fullname': [this.user.fullname,[Validators.required]],
      'email':[this.user.email, [Validators.required,Validators.email]],
      'address': [this.user.address,[Validators.required]],
      'phoneno': [this.user.phoneno,[Validators.required]],
      'dob': [this.user.dob,[Validators.required]],
      'maritalStatus': [this.user.maritalStatus,[Validators.required]],
      'knownLanguage': [this.user.knownLanguage,[Validators.required]],


    });
  }
  
  onPersonalinfoSubmit(){
    alert(this.user.fullname +''+this.user.email+''+this.user.phoneno);
  }

}

