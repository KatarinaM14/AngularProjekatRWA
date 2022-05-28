import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
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
}