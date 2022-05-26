import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodListComponent implements OnInit {

  food: Observable<readonly Food[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.food = this.store.select(selectAllFood);
  }
  selectedFood(singleFood : Food){
    this.store.dispatch(selectFood({foodID: singleFood.id }));
  }

}
