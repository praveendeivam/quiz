import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component implements OnInit 
{

  index:number=0;         //purpose:indicates to question index initally with 0
  score:number=0;         //purpose:stores the marks
  quizover:boolean=false; //purpose: Display all the questions one by one. After last question it sets to true
  userans:string="";      //purpose: to store the user answer for the corresponding question 
  correctans:string="";   //pupose: to store the correct answer for the corresponding question 
  qlength:number=0;       //purpose: to store the length of the quiz
  result:string='';       //purpose: display the result pass or fail

 
  clicked:boolean=false;  //purpose: once the user submit their option it restricts them to resubmit their option


  message:string="";      //purpose: Displays the user option correct or wronh
  selected:boolean=true;  //purpose: If the user submit their option it displays the next button
  
  



check()
{
  this.selected=false;
  this.updatescore();
  this.clicked=true;

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
    }
    //this.updatescore();
    this.selected=true;
    this.message='';
    this.clicked=false;
  }


  updatescore()
  {
    
    if(this.userans==this.correctans&&this.userans!=''&&this.correctans!='')
      {
        this.score++;
        this.message=this.userans+' is Correct Answer';
      }
      else
      {
        this.message='Wrong Answer, Correct answer is '+this.correctans;
      }
  }


  endquiz()
  {
      this.quizover=true;
      if(this.score>=(this.qlength/2))
        {
         this. result='Hurray! You Passed in the Quiz';
        }
        else
          {
            this.result='Oops! You failed in the Quiz';
          }
      alert('GK section completed');
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

  home()
  {
    this.router.navigate(['navigatequiz']);
  }



  constructor(private router:Router){}

  ngOnInit(): void {
  }

}
