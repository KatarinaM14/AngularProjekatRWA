import { createSelector } from "@ngrx/store";
import { User } from "src/app/models/user";
import { AppState } from "../app.state";
import { UserState } from "./users.reducer";

export const selectUserFeatures = createSelector(
    (state: AppState) => state.user,
    (user) => user
);

export const selectLoggedInUserState = createSelector(
    selectUserFeatures,
    (state: UserState) => state.logedInUser
)
export const selectAllUsers = createSelector(
    selectUserFeatures,
    (state: UserState) => Object.values(state.entities).filter(user => user !== null).map(user => <User>user)
);

export const selectLoggedInUser = createSelector(
    selectLoggedInUserState,
    (user) => user ?? null
);