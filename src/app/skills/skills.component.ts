import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillModel } from '../model/skills.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  currentRate = 8;

  user: SkillModel = new SkillModel();
  skillForm:FormGroup;
  hide:true;
  
  constructor(
    private router: Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit() {
    this.skillForm = this.formBuilder.group({
      'skill': [this.user.skill,[Validators.required]],
      'rating':[this.user.rating, [Validators.required]],
    });
  }
  
  onSkillSubmit(){
    alert(this.user.skill);
  }

}
