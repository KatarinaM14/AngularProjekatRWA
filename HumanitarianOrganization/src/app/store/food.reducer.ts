import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as Actions from './food.action';
import { Food } from "../models/food";
import { FoodDetailsComponent } from '../components/food-details/food-details.component';
import { state } from '@angular/animations';

export interface FoodState extends EntityState<Food>{
    clickedFoodId: number;
}

const adapter = createEntityAdapter<Food>();

const initialState: FoodState = adapter.getInitialState({
    clickedFoodId: 0,
});

export const foodReducer = createReducer(
    initialState,
    on(Actions.loadFoodSuccess, (state, {food}) => adapter.setAll(food, state)),
    on(Actions.selectFood, (state, {foodId}) => ({
        ...state,
        clickedFoodId: foodId,
    })),
    on(Actions.donatedFood,(state, {food }) =>(
         {
            ...state,
            category: food.category,
            name: food.name,
            donor: food.donor,
            image: food.image

        }
    )),
    // adapter.setOne(food,state)),
    on(Actions.incrementLikes,(state, {foodId, like}) =>
    adapter.updateOne(
        {
            id: foodId ,
            changes: {
                like,
            },
        },
        state
    )),
    on(Actions.deleteFood, (state, action) =>
    adapter.removeOne(action.id, state)
    ),
);