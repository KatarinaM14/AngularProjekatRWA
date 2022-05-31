import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validator, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Food, FoodModel } from 'src/app/models/food';
import { AppState } from '../../store/app.state';
import * as Actions from '../../store/food.action';

@Component({
  selector: 'app-dialogFood',
  templateUrl: './dialogFood.component.html',
  styleUrls: ['./dialogFood.component.scss']
})
export class DialogComponent implements OnInit {

@Input() singleFood: Food | null = null;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) { }

  foodForm !: FormGroup;
  ngOnInit(): void {
  this.foodForm = this.formBuilder.group({
    name : '',
    category: '',
    donor: '',
    image: ''
  })


 
  }
  addFood(){
    console.log(this.foodForm.value);
     
    console.log(this.foodForm.value.name);

    FoodModel.category = this.foodForm.value.category;
    FoodModel.name = this.foodForm.value.name;
    FoodModel.donor = this.foodForm.value.donor;
    FoodModel.image = this.foodForm.value.image;
    FoodModel.like = 0;
    console.log(FoodModel);
    this.store.dispatch(
            Actions.addFood({
              category : FoodModel.category,
              name: FoodModel.name,
              donor: FoodModel.donor,
              image: FoodModel.image
            })
          );
   
  }

   //   onSubmit(f: NgForm){
  //     this.store.dispatch(
  //       Actions.addFood({
  //         category: f.value.category,
  //         name: f.value.name,
  //         donor: f.value.name,
  //         image: f.value.image,
  //       })
  //     );
  // }
}
