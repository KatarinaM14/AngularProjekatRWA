import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import { VolunteeringService } from "../services/volunteering.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as VolunteeringActions from './volunteering.action';

@Injectable()
export class VolunteeringEffects {
  constructor(private volunteeringService: VolunteeringService, private actions$: Actions) {}

  loadEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VolunteeringActions.loadVolunteering),
      switchMap(() =>
        this.volunteeringService.getAll().pipe(
          map((volunteering) => VolunteeringActions.loadVolunteeringSuccess({ volunteering })),
          catchError(() => of({ type: 'load error' }))
        )
      )
    )
  );
}
