import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css']
})
export class Quiz2Component implements OnInit {
  index:number=0;
  score:number=0;
  quizover:boolean=false;
  userans:string="";
  correctans:string="";
  qlength:number=0;
  result:string="";


  message:string="";
  selected:boolean=true;
  clicked:boolean=false;
  

check()
{
  this.selected=false;
  this.clicked=true;
  this.updatescore();
 // this.selected=false;
}

  next()
  {
    if(this.index<this.qlength)
    {
    this.index++;
    }
    else
    {
      this.endquiz();
      this.quizover=true;
    }
    //this.updatescore();
    this.selected=true;
    this.message=" ";
    this.clicked=false;
  }


  updatescore()
  {
    
    if(this.userans==this.correctans&&this.userans!=""&&this.correctans!="")
      {
        this.score++;
        this.message=this.userans+' is Correct Answer';
      }
      else
      {
        this.message='Wrong Answer, Correct answer is '+this.correctans;
      }
  }



  receiveuseranswer(uans:string)
  {
    this.userans=uans;
  }


  receivecorrectanswer(cans:string)
  {
    this.correctans=cans;
  }

  receivequestionlength(length:number)
  {
    this.qlength=length;
  }

  endquiz()
  {
    alert('Maths section is over');
    if(this.score>=(this.qlength/2))
      {
        this.result='Hurray! You passed in the Quiz';
      }
      else
        {
          this.result='Oops! You failed in the Quiz';
        }
  }
  home()
  {
    this.router.navigate(['navigatequiz']);
  }



  constructor(private router:Router){}

  ngOnInit(): void {
  }

}
