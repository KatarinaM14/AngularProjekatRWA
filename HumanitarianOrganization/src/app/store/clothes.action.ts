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

export const incrementLikes = createAction(
    'Like a post',
    props<{clothesId: number; like: number}>()
);

export const deleteClothes = createAction(
    '[Clothes Component] Delete clothes',
    props<{id: number}>()
);
export const deleteClothesFailure = createAction(
    '[Clothes Component] Delete clothes failure',
    props<{error: any}>()
);

export const deleteClothesSuccess = createAction(
    '[Clothes Component] Delete clothes effect'
);