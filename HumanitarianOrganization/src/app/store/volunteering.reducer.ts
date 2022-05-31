import { Volunteering } from "../models/volunteering";
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as Actions from './volunteering.action';

export interface VolunteeringState extends EntityState<Volunteering> {
    clickedVolunteeringId: number;
  }
  
  const adapter = createEntityAdapter<Volunteering>();
  
  const initialState: VolunteeringState = adapter.getInitialState({
    clickedVolunteeringId: 0,
  });
  
  export const volunteeringReducer = createReducer(
    initialState,
    on(Actions.loadVolunteeringSuccess, (state, { volunteering }) => adapter.setAll(volunteering, state)),
    on(Actions.selectVolunteering, (state, { volunteeringId }) => ({
      ...state,
      clickedVolunteeringId: volunteeringId,
    })),
    on(Actions.incrementVolunteers,(state, {volunteeringId, volunteers}) =>
    adapter.updateOne(
        {
            id: volunteeringId ,
            changes: {
                volunteers,
            },
        },
        state
    )),
  );
  