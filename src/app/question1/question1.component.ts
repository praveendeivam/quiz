import { Component, OnInit, Input, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit, DoCheck
{

  questions:any;      //purpose: stores the questions and answers
  currentquestion:string="";  // points the current question
  currentoptions:string[]=['']; //stores the options available for the current question
  userclicked:string="";     // user answer
  correctanswer:string="";  //correct answer

  @Input() questionindex:number=0;     // receive the index from quiz component
  @Output() questionlength=new EventEmitter<number>();  // send the quiz length to the quiz component
  @Output() userselected=new EventEmitter<string>();   // send the user answer to quiz component
  @Output() actualanswer=new EventEmitter<string>();  // send the correct answer to the quiz component


   

  ngOnInit(): void 
  {
    this.questions=[
      {
        question: 'Pick the correct combination of the vowels given below?',
        options: ['AEIOU', 'AEZUO', 'AEIOF', 'AEJOU'],
        answer: 'AEIOU'
      },
      {
        question: 'What is the captial of India',
        options: ['Mumbai', 'Bangalore', 'New Delhi', 'Kolkata'],
        answer: 'New Delhi'
      },
      {
        question: 'How many continents are there in the world?',
        options: ['6', '7', '5', '8'],
        answer: '7'
      },
      {
        question: '1 cm=__ mm?',
        options: ['100', '10', '1', '1000'],
        answer: '10'
      },
      {
        question: 'Which country is called "The Land of Rising Sun"?',
        options: ['Japan', 'Nepal', 'China', 'Bhutan'],
        answer: 'Japan'
      },
      {
        question: 'Which is the most sensitive organ in our body?',
        options: ['Eyes', 'Skin', 'Nose', 'Tongue'],
        answer: 'Skin'
      },
      {
        question: 'Which is the largest country in the world?',
        options: ['India', 'America', 'Russia', 'China'],
        answer: 'Russia'
      },
      {
        question: 'Which of the following bird is most intelligent?',
        options: ['Owl', 'Kingfisher', 'Sparrow', 'Crow'],
        answer: 'Owl'
      },
      {
        question: 'Which gas is most abudant in the earth atmosphere',
        options: ['Oxygen', 'CO2', 'Nitrogen', 'Methane'],
        answer: 'Nitrogen'
      },
      {
        question: 'What is the top color in a rainbow?',
        options: ['Violet', 'Indigo', 'Red', 'Blue'],
        answer: 'Red'
      }
      ];

      this.questionlength.emit(this.questions.length);
  }


  ngDoCheck()
  {
    this.currentquestion=this.questions[this.questionindex].question;
    this.currentoptions=this.questions[this.questionindex].options;

  }


  useranswer(option:string)
  {
    this.userclicked=option;
    console.log("User option"+option);
    this.correctanswer=this.questions[this.questionindex].answer;
    console.log("Correct ans "+ this.correctanswer);

    this.userselected.emit(this.userclicked);
    this.actualanswer.emit(this.correctanswer);
  }





}
