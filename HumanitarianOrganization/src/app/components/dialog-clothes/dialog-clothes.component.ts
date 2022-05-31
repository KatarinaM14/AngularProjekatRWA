import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Actions from '../../store/clothes.action';
import { Store } from '@ngrx/store';
import { ClothesModel } from 'src/app/models/clothes';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-dialog-clothes',
  templateUrl: './dialog-clothes.component.html',
  styleUrls: ['./dialog-clothes.component.scss']
})
export class DialogClothesComponent implements OnInit {

  constructor(private store: Store<AppState>,private formBuilder: FormBuilder) { }

  foodForm !: FormGroup;
  ngOnInit(): void {
    this.foodForm = this.formBuilder.group({
    category: '',
    donor : '',
    description : '',
    image: '',
  })
  }


  addClothes(){
    console.log(this.foodForm.value);
     
    console.log(this.foodForm.value.name);

    ClothesModel.category = this.foodForm.value.category;
    ClothesModel.donor = this.foodForm.value.donor;
    ClothesModel.description = this.foodForm.value.description;
    ClothesModel.image = this.foodForm.value.image;
    ClothesModel.like = 0;
    console.log(ClothesModel);
    this.store.dispatch(
            Actions.addClothes({
              category : ClothesModel.category,
              donor: ClothesModel.donor,
              description: ClothesModel.description,
              image: ClothesModel.image
            })
          );
   
  }
}
