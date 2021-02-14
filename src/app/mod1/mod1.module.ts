import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { Comp1Component } from './comp1/comp1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Mod1Component, Comp1Component],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [Mod1Component]
})
export class Mod1Module { }
