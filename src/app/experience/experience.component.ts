import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InternshipModel } from '../model/internship.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  user: InternshipModel = new InternshipModel();
  intershipForm:FormGroup;
  hide:true;
  
  constructor(
    private router: Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit() {
    this.intershipForm = this.formBuilder.group({
      'experience': [this.user.experience,[Validators.required]],
      'organization':[this.user.organization, [Validators.required]],
      'designation': [this.user.designation,[Validators.required]],
      'from': [this.user.from,[Validators.required]],
      'to': [this.user.to,[Validators.required]],



    });
  }
  
  onInternshipSubmit(){
    alert(this.user.experience +''+this.user.organization+''+this.user.designation);
  }

}

