import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CarComponent],
  declarations: [CarComponent]
})
export class CarModule { }
