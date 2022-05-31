import { Injectable } from "@angular/core";
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";
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

        deleteFood$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(FoodActions.deleteFood),
                mergeMap((action) =>
                 this.foodService.deleteFood(action.id).pipe(
                     map(() => FoodActions.deleteFoodSuccess()),
                     catchError((error) => 
                        of(FoodActions.deleteFoodFailure({error})))
                 ))
            );
        });

    addFood$ = createEffect(( )=>{
        return this.actions$.pipe(
            ofType(FoodActions.addFood),
            switchMap((action) => 
            this.foodService
            .postFood(
                action
            )
            .pipe(
                map((food) => FoodActions.donatedFood({food})),
                catchError((error) => of(FoodActions.donatingFoodFailure({error})))
            ))
            
        )
    });
}