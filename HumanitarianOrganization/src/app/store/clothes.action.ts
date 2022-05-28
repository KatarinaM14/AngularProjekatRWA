import { createAction, props } from '@ngrx/store';
import { Clothes } from '../models/clothes';

// export const changeRating = createAction(
//     'Change rating',
//     props<{clothesId: number; rating: number}>()
// );

export const loadClothesSuccess = createAction(
    'Load clothes Success',
    props<{clothes: Clothes[]}>()
);
export const loadClothes = createAction('Load clothes');

export const selectClothes = createAction(
    'Select Clothes',
    props<{clothesId: number}>()
);