import { Routes } from "@angular/router";
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';


export const applicationRoutes: Routes = [
    //{ path: '', component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'question', component: QuestionComponent }
]