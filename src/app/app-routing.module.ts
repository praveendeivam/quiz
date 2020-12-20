import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Quiz1Component } from './quiz1/quiz1.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { AppComponent } from './app.component';
import { NavigatequizComponent } from './navigatequiz/navigatequiz.component';
import {Quiz3Component} from './quiz3/quiz3.component';

const routes: Routes = [{path:'quiz1',component:Quiz1Component},
{path:'quiz2',component:Quiz2Component},
{path:'navigatequiz',component: NavigatequizComponent},
{path:'quiz3',component:Quiz3Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
