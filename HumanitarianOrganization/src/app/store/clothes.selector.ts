import { createSelector } from '@ngrx/store';
import { Clothes } from "../models/clothes";
import { AppState } from "./app.state";
import { ClothesState } from "./clothes.reducer";

export const selectClothesFeature = createSelector(
    (state: AppState) => state.clothes,
    (clothes) => clothes
);

export const selectAllClothes = createSelector(
    selectClothesFeature,
    (state: ClothesState) =>
     Object.values(state.entities)
        .filter((clothes) => clothes != null)
        .map((clothes) => <Clothes>clothes)
);

export const selectAllClothesAsDict = createSelector(
    selectClothesFeature,
    (state: ClothesState) => state.entities
);

export const selectClickedClothesId = createSelector(
    selectClothesFeature,
    (state: ClothesState) => state.clickedClothesId
);

export const selectClickedClothes = createSelector(
    selectAllClothesAsDict,
    selectClickedClothesId,
    (clothes, clickedClothesId) => clothes[clickedClothesId] ?? null
);