import { Food } from "../models/food";
import { AppState } from "./app.state";
import { FoodState } from "./food.reducer";
import { createSelector } from '@ngrx/store';

export const selectFoodFeature = createSelector(
    (state: AppState) => state.food,
    (food) => food
);

export const selectAllFood = createSelector(
    selectFoodFeature,
    (state: FoodState) => 
        Object.values(state.entities)
         .filter((food) => food != null)
         .map((food) => <Food>food)
);

export const selectAllFoodAsDict = createSelector(
    selectFoodFeature,
    (state: FoodState) => state.entities
);

export const selectClickedFoodId = createSelector(
    selectFoodFeature,
    (state: FoodState) => state.clickedFoodId
);

export const selectClickedFood = createSelector(
    selectAllFoodAsDict,
    selectClickedFoodId,
    (food, clickedFoodId) => food[clickedFoodId] ?? null
);