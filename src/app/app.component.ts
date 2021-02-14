import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  hideRow:string = '';

 
  eventStyleChanger(e): void {
    console.log(e);
    this.hideRow = 'collapse';
  }


}
