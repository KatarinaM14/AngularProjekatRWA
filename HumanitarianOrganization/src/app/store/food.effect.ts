import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import { FoodService } from "../services/food.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FoodActions from './food.action';

@Injectable()
export class FoodEffects {
    constructor(private foodService: FoodService, private actions$: Actions)
    {}

    loadEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FoodActions.loadFood),
            switchMap(() => 
                this.foodService.getAll().pipe(
                    map((food) => FoodActions.loadFoodSuccess({food})),
                    catchError(() => of({type: 'load error'}))
                ))
        ));
}