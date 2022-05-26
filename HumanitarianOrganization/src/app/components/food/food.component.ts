import { Component, OnInit, Output , EventEmitter, Input } from '@angular/core';
import { Food } from 'src/app/models/food';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  @Input() food: Food | null = null;
  @Output() onClick: EventEmitter<Food> = new EventEmitter<Food>();


  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.food){
      this.onClick.emit(this.food);
    }
  }
}
