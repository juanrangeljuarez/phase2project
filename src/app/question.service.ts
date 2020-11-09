import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './module.question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  loadListQuestions(): Observable<Question[]>{
    return this.httpClient.get<Question[]>("http://localhost:3000/questions");
  }
  
}



