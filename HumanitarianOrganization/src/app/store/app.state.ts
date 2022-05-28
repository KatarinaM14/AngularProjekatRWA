import { ClothesState } from "./clothes.reducer";
import { FoodState } from "./food.reducer";
import { VolunteeringState } from "./volunteering.reducer";


export interface AppState{
    clothes: ClothesState;
    food: FoodState;
    volunteering: VolunteeringState;
}