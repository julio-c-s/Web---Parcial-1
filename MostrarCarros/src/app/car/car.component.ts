import { Component, OnInit } from '@angular/core';
import { CarServiceService } from './car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: any;
  cars_count: any;

  constructor(
    private service: CarServiceService
  ) { }

  ngOnInit() {
    this.getCars()
  }

  getCars(): any {
    this.service.getCars().subscribe({
      next: (success) => {
        this.cars = success;
        console.log(this.cars)
        this.cars_count = this.cars.reduce((acc: any, obj: any) => {
          if (acc[obj.marca]) {
            acc[obj.marca] += 1;
          } else {
            acc[obj.marca] = 1;
          }
          return acc;
        }, {});
        console.log(this.cars_count)
      },
      error: (error) => console.error(error)
    })
  }
}
