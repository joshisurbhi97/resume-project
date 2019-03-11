import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CertificateModel } from '../model/certificate.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  user: CertificateModel = new CertificateModel();
  certificateForm:FormGroup;
  hide:true;
  
  constructor(
    private router: Router,
    private formBuilder:FormBuilder
    
    ) { }

  ngOnInit() {
    this.certificateForm = this.formBuilder.group({
      'course': [this.user.course,[Validators.required]],
      'from':[this.user.from, [Validators.required]],
      'to': [this.user.to,[Validators.required]],



    });
  }
  
  onCertificateSubmit(){
    alert(this.user.course +''+this.user.from+''+this.user.to);
  }

}
