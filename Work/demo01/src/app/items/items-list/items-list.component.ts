import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShopptingItem } from '../../shopping/shopping-item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  @Input() items: ShopptingItem[];
  @Output() changeItem: EventEmitter<ShopptingItem> = new EventEmitter();
  @Output() removeItem: EventEmitter<ShopptingItem> = new EventEmitter();

  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  constructor() {}

  openItemSettings(item: ShopptingItem) {
    this.changeItem.emit(item);
  }

  addItem() {
    this.changeItem.emit({
      id: this.getNextId(),
      name: '',
      price: null,
    });
  }

  getNextId() {
    return (
      this.items.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1
    );
  }

  remove(item: ShopptingItem) {
    this.removeItem.emit(item);
  }
}
