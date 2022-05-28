import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Food } from 'src/app/models/food';
import { AppState } from 'src/app/store/app.state';
import { selectFood } from 'src/app/store/food.action';
import { selectAllFood } from 'src/app/store/food.selector';

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
    this.store.dispatch(selectFood({foodId: singleFood.id }));
  }

}
