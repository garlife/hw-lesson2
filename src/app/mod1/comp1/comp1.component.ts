import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  interpolationValue: number = 1.1234567;
  interpolationPipeValue: string = 'привет мир!';
  interpolationPipeDateValue: Date = new Date();
  dataBindingValue: string = '';
  paramValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  eventBindingHandler(e): void {
    console.log(e);
  }

}
