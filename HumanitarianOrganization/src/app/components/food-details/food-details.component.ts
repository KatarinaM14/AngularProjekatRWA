import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { selectClickedFood, selectFoodFeature } from 'src/app/store/food.selector';
import { deleteFood, incrementLikes } from 'src/app/store/food.action';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  @Input() singleFood: Food | null = null;
  count : number = 0;
  
  constructor(private store: Store<AppState>, private dialog: MatDialog) { 
    
  }

  ngOnInit(): void {

    this.store.select(selectClickedFood).subscribe((singleFood) =>{
      if(singleFood){
        this.singleFood = singleFood;
      }
    }
    );
    
  }

  like(){ 
    if(this.singleFood){
       if(!this.singleFood.like){
      this.count=0;
    }
    else if(this.singleFood.like>0){
        this.count=this.singleFood.like;
      }
      console.log("Like: "+this.singleFood.like);
      console.log("/count: "+this.count);
      console.log("ID: "+this.singleFood.id);
      this.count++;
    
      this.store.dispatch(
        incrementLikes({
          foodId: this.singleFood.id,
          like: this.count,
        })
      );
    }
  }
  askForFood(){
    if(this.singleFood){
      this.store.dispatch(deleteFood({id: this.singleFood.id}));
    }
  }

  // addFood(){
  //   this.dialog.open(DialogComponent,{
  //     width: '30%'
  //   });
  // }
}
