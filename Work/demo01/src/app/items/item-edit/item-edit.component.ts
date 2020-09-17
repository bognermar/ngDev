import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ShopptingItem } from '../../shopping/shopping-item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit, OnChanges {
  @Input() item: ShopptingItem;
  @Output() saveItem: EventEmitter<ShopptingItem> = new EventEmitter();
  @Output() closeItem: EventEmitter<ShopptingItem> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: this.item.id,
      name: [this.item.name, [Validators.required]],
      price: [this.item.price, [Validators.required, Validators.min(0)]],
    });
    console.log(this.form.errors);
    console.log(this.form);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item != undefined && this.form != undefined) {
      this.form.setValue(changes.item.currentValue);
    }
  }

  saveForm(form) {
    this.saveItem.emit(form.value);
  }

  closeCard() {
    this.closeItem.emit();
  }
}
