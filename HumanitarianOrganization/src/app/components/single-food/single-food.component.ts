import { Component, OnInit, Output,Input, EventEmitter  } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-single-food',
  templateUrl: './single-food.component.html',
  styleUrls: ['./single-food.component.scss']
})
export class SingleFoodComponent implements OnInit {
  @Input() singleFood: Food | null = null;
  @Output() onClick: EventEmitter<Food> = new EventEmitter<Food>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.singleFood){
      this.onClick.emit(this.singleFood);
    }
  }

}
