import { Component, OnInit,DoCheck,EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {
  questions:any;
  currentquestion:string="";
  currentoptions:string[]=[''];
  userclicked:string="";
  correctanswer:string="";

  @Input() questionindex:number=0;
  @Output() questionlength=new EventEmitter<number>();
  @Output() userselected=new EventEmitter<string>();
  @Output() actualanswer=new EventEmitter<string>();

  ngOnInit(): void 
  {
    this.questions=[
      {
        question: 'Who was the last Viceroy of India?',
        options: ['Lord Canning', 'Lord Mountbatten', 'dtipon', 'Lord Wellesley'],
        answer: 'Lord Mountbatten'
      },
      {
        question: 'Medieval period was',
        options: ['the old period of history', 'the period associated with the growth of all the forces of modernity', 'none of the above', 'both a & b'],
        answer: 'none of the above'
      },
      {
        question: 'The British thought surveys were important for',
        options: ['writing history', 'effective judgement', 'effective administration', 'none of these'],
        answer: 'effective administration'
      },
      {
        question: 'Which of the following is NOT the period of division of Indian History by James Mill?',
        options: ['Hindu', 'Muslim', 'Christians', 'Sikhs'],
        answer: 'Sikhs'
      },
      {
        question: 'Who devised the new-system of revenue called Mahalwari?',
        options: ['Queen Elizabeth', 'Holt Mackenzie', 'Queen Victoria', 'Gandhiji'],
        answer: 'Holt Mackenzie'
      },
      {
        question: 'The National Archives of India came up in the',
        options: ['1910', '1920', '1930', '1940'],
        answer: '1920'
      },
      {
        question: 'The Company was appointed as the Diwan of Bengal in',
        options: ['1762', '1763', '1764', '1765'],
        answer: '1765'
      },
      {
        question: 'Indigo production came down in Bengal in',
        options: ['1850', '1852', '1855', '1859'],
        answer: '1859'
      },
      {
        question: 'Who had developed the Munro system?',
        options: ['Capiain Alexander', 'Holt Mackenzie', 'Thomas Munro', 'None of these'],
        answer: '446'
      },
      {
        question: 'H.T. Colebrook describes the conditions of the under-tenant farmers in',
        options: ['1800', '1805', '1806', '1808'],
        answer: '1806'
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
  }}
