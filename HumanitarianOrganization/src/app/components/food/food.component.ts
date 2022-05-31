import { Component, OnInit, Output , EventEmitter, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from 'src/app/models/food';
import { selectClickedFood } from 'src/app/store/food.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialogFood/dialogFood.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  title = 'ng-food';
  selectedFood: Observable<Food | null> = of(null);


  constructor(private store: Store<AppState>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.selectedFood = this.store.select(selectClickedFood);

  }
  openDialog() {
    this.dialog.open(DialogComponent, {
        width: '30%'
    });
  }

}
