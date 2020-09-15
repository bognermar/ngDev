import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ShopptingItem } from './shopping-item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<ShopptingItem[]> {
    return this.httpClient.get<ShopptingItem[]>(environment.url_items);
  }
}
