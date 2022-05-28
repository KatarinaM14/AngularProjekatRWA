import { Volunteering } from "../models/volunteering";
import { createAction, props } from '@ngrx/store';

export const loadVolunteeringSuccess = createAction(
    'Load volunteering Success',
    props<{ volunteering: Volunteering[] }>()
  );
  
  export const loadVolunteering = createAction('Load Volunteering');
  
  export const selectVolunteering = createAction(
    'Select Volunteering',
    props<{ volunteeringId: number }>()
  );
  