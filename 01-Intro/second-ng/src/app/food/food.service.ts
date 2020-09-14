import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FoodItem } from './food-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  /*Wird mit JSON ersetzt
  food = [
    { name: 'Banane', price: 2 },
    { name: 'Apfel', price: 1 },
  ];*/

  getFood(): Observable<FoodItem[]> {
    //return of(this.food); //Mit of wird das ganze zu einem Observable Stream

    return this.httpClient.get<FoodItem[]>(environment.url);
  }
}
