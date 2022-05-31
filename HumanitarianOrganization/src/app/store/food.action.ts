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

export const addFood = createAction(
    '[Dialog Component] Add Food',
    props<{
        category: string;
        name: string;
        donor: string;
        image: string;
    }>()
);

export const donatedFood = createAction(
    '[Food Effect] Food Donation Success',
    props<{food: Food }>()
);

export const donatingFoodFailure = createAction(
    '[Food Effect] Donationing Food Failure',
    props<{error: any }>()
);

export const incrementLikes = createAction(
    'Like a post',
    props<{foodId: number; like: number}>()
);

export const deleteFood = createAction(
    '[Food Component] Delete food',
    props<{id: number}>()
);
export const deleteFoodFailure = createAction(
    '[Food Component] Delete food failure',
    props<{error: any}>()
);

export const deleteFoodSuccess = createAction(
    '[Food Component] Delete food effect'
);