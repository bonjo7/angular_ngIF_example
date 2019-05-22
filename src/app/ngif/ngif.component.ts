import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  marked = false;
  theCheckbox = false;
  constructor() { }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }

  ngOnInit() {
  }

}
