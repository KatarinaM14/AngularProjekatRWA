import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  @Input() food: Food | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
