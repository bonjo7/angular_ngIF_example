import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  //Setting marked to false which will be used as ngIF condition in html to display or not display paragraph component
  marked = false;
  //Set checkbox to false to ensure if is unticked
  theCheckbox = false;
  constructor() { }

  //Using toggle method to change what will be displayed
  toggleVisibility(e){
    this.marked= e.target.checked;
  }

  ngOnInit() {
  }

}
