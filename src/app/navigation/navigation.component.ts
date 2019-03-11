import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  newTitle: string;


  constructor() { }

  ngOnInit() {
  }


  modalTitle(title: string){
 this.newTitle = title;
  }

}
