import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {





  read:boolean=false;

  readguide()
  {
    this.read=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
