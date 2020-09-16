import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../shopping/shopping.service';
import { ShopptingItem } from '../../shopping/shopping-item.model';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
})
export class ItemsContainerComponent implements OnInit {
  selectedItem: ShopptingItem;
  items: ShopptingItem[];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.shoppingService.getItems().subscribe((data) => (this.items = data));
  }

  selectItem(item: ShopptingItem) {
    this.selectedItem = { ...item };
  }

  saveItemValus(item: ShopptingItem) {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.items.push(item);
    this.items.sort((a, b) => a.id - b.id);
  }

  removeItem(item: ShopptingItem) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }
}
