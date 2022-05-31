import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { ClothesService } from "../services/clothes.service";
import * as ClothesActions from './clothes.action';

@Injectable()
export class ClothesEffects{
    constructor(private clothesService: ClothesService, private actions$: Actions)
    {}

    loadEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClothesActions.loadClothes),
            switchMap(() =>
                this.clothesService.getAll().pipe(
                    map((clothes) => ClothesActions.loadClothesSuccess({clothes})),
                    catchError(() => of({type: 'load error'}))
            ))
        )
    );

    deleteClothes$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ClothesActions.deleteClothes),
            mergeMap((action) =>
             this.clothesService.deleteClothes(action.id).pipe(
                 map(() => ClothesActions.deleteClothesSuccess()),
                 catchError((error) => 
                    of(ClothesActions.deleteClothesFailure({error})))
             ))
        );
    });
}