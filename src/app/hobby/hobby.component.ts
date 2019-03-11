import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HobbyModel } from '../model/hobby.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  user: HobbyModel = new HobbyModel();
  hobbyForm:FormGroup;
  hide:true;
  
  constructor(
    private router: Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit() {
    this.hobbyForm = this.formBuilder.group({
      'strength': [this.user.strength,[Validators.required]],
      'hobby':[this.user.hobby, [Validators.required]],




    });
  }
  
  onHobbySubmit(){
    alert(this.user.strength +''+this.user.hobby);
  }

}
