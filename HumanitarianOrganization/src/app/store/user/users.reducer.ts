import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { User, UserModel } from "src/app/models/user";
import * as Actions from "./user.actions";

const adapter = createEntityAdapter<User>();

export interface UserState extends EntityState<User>{
    loggedInUserId: number,
    logedInUser: User
}

const initialState : UserState = adapter.getInitialState({
    loggedInUserId: 0,
    // logedInUser: new User("", "", "", )
    logedInUser: new User("", "", "" )
});

export const userReducer = createReducer(
    initialState,



    on(Actions.logInSuccess, (state, {user}) => ({
        ...state,
        ulogovanKorisnik: user
    })),

    on(Actions.loadingUserSuccess, (state, {users}) => adapter.setAll(users, state)),


    on(Actions.loggingOutSuccess, (state) => ({
        ...state,
        // ulogovanKorisnik: new User("", "", "")
    })),

    //on(Actions.registerNewUser, (state, {newUSer}) => adapter.addOne({newUser}, state)),

   
   on(Actions.loadUsers,(state, {user }) =>(
    {
       ...state,
       name: user.name,
       email: user.email,
       password: user.password

   }
)),

)