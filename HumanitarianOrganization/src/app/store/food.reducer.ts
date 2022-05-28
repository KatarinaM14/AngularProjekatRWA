import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as Actions from './food.action';
import { Food } from "../models/food";

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
    }))
);