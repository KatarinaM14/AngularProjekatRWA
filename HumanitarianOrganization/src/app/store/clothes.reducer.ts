import { Clothes } from "../models/clothes";
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as Actions from './clothes.action';

export interface ClothesState extends EntityState<Clothes>{
    clickedClothesId: number;
}

const adapter = createEntityAdapter<Clothes>();

const initialState: ClothesState = adapter.getInitialState({
    clickedClothesId: 0,
});

export const clothesReducer = createReducer(
    initialState,
    // on(Actions.changeRating, (state, {clothesId, rating}) => {
    //     const targetClothes = state.entities[clothesId];
    //     if(targetClothes){
    //         return adapter.setOne({ ...targetClothes, score: rating}, state);
    //     }else{
    //         return state;
    //     }
    // }),
    on(Actions.loadClothesSuccess, (state, { clothes}) =>
        adapter.setAll(clothes, state)
    ),
    on(Actions.selectClothes, (state, { clothesId }) => ({
        ...state,
        clickedClothesId: clothesId
    }))
);