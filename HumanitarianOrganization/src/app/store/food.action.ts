import { createAction, props } from '@ngrx/store';
import { Food } from "../models/food";

export const loadFoodSuccess = createAction(
    'Load food Success',
    props<{food: Food[]}>()
);

export const loadFood = createAction('Load food');

export const selectFood = createAction(
    'Select Food',
    props<{foodId: number}>()
);