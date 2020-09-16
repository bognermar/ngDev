import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShopptingItem } from '../../shopping/shopping-item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit {
  @Input() item: ShopptingItem;
  @Output() saveItem: EventEmitter<ShopptingItem> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  saveNewValues() {
    this.saveItem.emit(this.item);
  }
}
