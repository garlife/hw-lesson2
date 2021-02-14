import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  red: string = '#FF0000';
  orange: string = '#FFA500';
  yellow: string = '#FFFF00';
  green: string = '#008000';
  blue: string = '#0000FF';
  indigo: string = '#4B0082';
  violet: string = '#EE82EE';

  hideTable:string = '';
 
  eventStyleChanger(e): void {
    console.log(e);
    this.hideTable = 'collapse';
  }


}
