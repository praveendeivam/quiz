import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigatequiz',
  templateUrl: './navigatequiz.component.html',
  styleUrls: ['./navigatequiz.component.css']
})
export class NavigatequizComponent implements OnInit {

  Choosed:boolean=false; //used for hiding the buttons
  
    constructor(private router:Router){}
    goto1()
    {
    
      this.router.navigate(['/quiz1']);
      this.Choosed=true;
    }
  
    goto2()
    {
      this.router.navigate(['/quiz2']);
      this.Choosed=true;
    }

    goto3()
    {
      this.router.navigate(['/quiz3']);
      this.Choosed=true;
    }

  ngOnInit(): void {
  }

}
