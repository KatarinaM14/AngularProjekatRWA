import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import * as UserActions from "./user.actions";

@Injectable()
export class UserEffect {
    constructor(private userService: UserService, private actions$: Actions) {}

    registerNewUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(UserActions.registerNewUser),
            //map((user) => console.log(user.newUser)),
            switchMap((user) => this.userService.addUser(user).pipe(
                map((user) => (UserActions.loadUsers({user}))),
                catchError(() => of({type: "load error"}))
                )
            )
        )
    );

    registerNewUserNestJS$ = createEffect(() => 
        this.actions$.pipe(
            ofType(UserActions.registerNewUserNestJS),
            //map((user) => console.log(user.newUser)),
            switchMap((user) => this.userService.addUserNestJS(user).pipe(
                map((user) => (UserActions.loadUsers({user}))),
                catchError(() => of({type: "load error"}))
                )
            )
        )
    );
}

