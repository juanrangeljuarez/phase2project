import { Component, OnInit } from '@angular/core';
import { Question } from '../module.question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionList:Question[] = [];
  answersList: string[] = [];
  correctAnswersList: string[] = [];
  currentQuestion: number=0;
  correctAnswers: number=0;
  answerQuestion: string;
  flagAnswers: boolean = false;

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.questionService.loadListQuestions().subscribe(data=>this.questionList=data);
   
  }

  loadQuestions():void{
    
  }

  nextQuestion():void{
    this.answersList[this.currentQuestion] = this.answerQuestion;
    this.currentQuestion = this.currentQuestion+1; 
  }

  previousQuestion():void{
    this.answersList[this.currentQuestion] = this.answerQuestion;
    this.currentQuestion = this.currentQuestion-1;
  }

  

  submitAnswers(): void{
    this.answersList[this.currentQuestion] = this.answerQuestion;
    for(var i = 0; i < this.questionList.length; i++){
        
        if(this.answersList[i] == this.questionList[i].answer){
          this.correctAnswers++; 
        }
        if(this.questionList[i].answer == "optionA"){
              this.correctAnswersList[i] = this.questionList[i].question + " " + this.questionList[i].optionA;
        } else if(this.questionList[i].answer == "optionB"){
              this.correctAnswersList[i] = this.questionList[i].question + " " + this.questionList[i].optionB;
        } else if(this.questionList[i].answer == "optionC"){
              this.correctAnswersList[i] = this.questionList[i].question + " " + this.questionList[i].optionC;
        } else {
              this.correctAnswersList[i] = this.questionList[i].question + " " + this.questionList[i].optionD;
        }

    }
      this.flagAnswers = true;
   
  }




}
