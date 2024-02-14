import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent {
  isClicked = false;
  clickingTimes = new Array() ;

  onClick(){
    this.isClicked = !this.isClicked;
    this.clickingTimes.push(this.clickingTimes.length + 1 );
  }
}
