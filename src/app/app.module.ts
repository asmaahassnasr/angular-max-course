import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';

@NgModule({
  declarations: [
    AppComponent, WarningComponent, SuccessComponent, DataBindingComponent, DirectivesAssignmentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
