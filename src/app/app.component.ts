import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteText {
        color:white;
    }
  `]
})
export class AppComponent {
  displayDetails = false;
  logs = [];
  
  onToggleDisplayDetails(){
    this.displayDetails = !this.displayDetails;
    this.logs.push(this.logs.length + 1);
  }
}
