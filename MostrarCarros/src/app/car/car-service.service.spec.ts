/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarServiceService } from './car-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: CarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [CarServiceService]
    });
  });

  it('should ...', inject([CarServiceService], (service: CarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
