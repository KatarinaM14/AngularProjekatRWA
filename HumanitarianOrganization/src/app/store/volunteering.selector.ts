import { Volunteering } from "../models/volunteering";
import { AppState } from "./app.state";
import { VolunteeringState } from "./volunteering.reducer";
import { createSelector } from '@ngrx/store';

export const selectVolunteeringFeature = createSelector(
    (state: AppState) => state.volunteering,
    (volunteering) => volunteering
  );
  export const selectAllVolunteerings = createSelector(
    selectVolunteeringFeature,
    (state: VolunteeringState) =>
      Object.values(state.entities)
        .filter((volunteering) => volunteering != null)
        .map((volunteering) => <Volunteering>volunteering)
  );
  
  export const selectAllVolunteeringAsDict = createSelector(
    selectVolunteeringFeature,
    (state: VolunteeringState) => state.entities
  );
  
  export const selectClickedVolunteeringId = createSelector(
    selectVolunteeringFeature,
    (state: VolunteeringState) => state.clickedVolunteeringId
  );
  
  export const selectClickedVolunteering = createSelector(
    selectAllVolunteeringAsDict,
    selectClickedVolunteeringId,
    (volunteering, clickedVolunteeringId) => volunteering[clickedVolunteeringId] ?? null
  );
  