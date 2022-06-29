import { createAction, props } from "@ngrx/store"
import { User } from "src/app/models/user"


export const loadUser = createAction('Load user');

export const logInUser = createAction(
    "Logovanje korisnika",
    props<{
        user: User,
    }>()

)

export const logInSuccess = createAction(
    "Uspesno logovanje korisnika",
    props<{
        user: User
    }>()
)
export const registerNewUserNestJS = createAction(
    "Registrovanje novog korisnika",
    props<{
        name: string | null,
        email: string | null,
        password: string | null
    }>()

   
)

export const registerNewUser = createAction(
    "Registrovanje novog korisnika",
    props<{
        name: string | null,
        email: string | null,
        password: string | null
    }>()

   
)

export const loadUsers = createAction(
    "Ucitavanje korisnika iz baze",
    props<{user: User }>()
)

export const loadingUserSuccess = createAction(
    "Uspesno ucitani korisnici iz baze",
    props<{
        users: User[]
    }>()
)


export const loggingOutSuccess = createAction(
    "Uspesno izlogovan korisnika",
    props<{
        user: User
    }>()
)