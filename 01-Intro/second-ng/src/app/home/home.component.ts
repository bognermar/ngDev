import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food/food.service';
import { FoodItem } from '../food/food-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private fs: FoodService) {}

  food = this.fs.getFood();

  foodItems: FoodItem[];

  ngOnInit(): void {
    this.fs.getFood().subscribe((data) => {
      this.foodItems = data;
    });
  }
}
