import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EducationModel } from '../model/education.model';
import {Router} from "@angular/router";
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  user: EducationModel = new EducationModel();
  educationForm:FormGroup;
  hide:true;
  
  constructor(
    private router: Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit() {
    this.educationForm = this.formBuilder.group({
      'qualification': [this.user.qualification,[Validators.required]],
      'institute':[this.user.qualification, [Validators.required]],
      'percentage': [this.user.qualification,[Validators.required]],
      'year': [this.user.qualification,[Validators.required]],


    });
  }
  
  onEducationSubmit(){
    alert(this.user.qualification +''+this.user.percentage+''+this.user.year);
  }

}

