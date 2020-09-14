import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FoodItem } from './food-item.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  food = [
    { name: 'Banane', price: 2 },
    { name: 'Apfel', price: 1 },
  ];

  getFood(): Observable<FoodItem[]> {
    return of(this.food); //Mit of wird das ganze zu einem Observable Stream
  }
}
