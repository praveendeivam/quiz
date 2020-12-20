import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { Question1Component } from './question1/question1.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { Question2Component } from './question2/question2.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { NavigatequizComponent } from './navigatequiz/navigatequiz.component';
import { Quiz3Component } from './quiz3/quiz3.component';
import { Question3Component } from './question3/question3.component';

@NgModule({
  declarations: [
    AppComponent,
    Quiz1Component,
    Question1Component,
    Quiz2Component,
    Question2Component,
    InstructionsComponent,
    NavigatequizComponent,
    Quiz3Component,
    Question3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
