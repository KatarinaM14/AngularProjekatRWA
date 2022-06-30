import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private store: Store<User>) { }

  setAuthorizationHeader() {
    return new HttpHeaders({
      Authorization: 'Bearer ' + this. getLoggedInUser().token,
    });
  }

  addUser(newUser: any) {


    // return this.httpClient
    //   .post<User>(environment.apiURL + 'register', newUser)
    //   .pipe(catchError(errorHandler));

    return this.httpClient.post<any>(`${environment.apiURL}/user/`,newUser)
              .pipe(catchError(errorHandler));
  }
 

  addUserNestJS(newUser: any) {


    return this.httpClient
      .post<User>(environment.apiURL + '/auth/register', newUser)
      .pipe(catchError(errorHandler));

    // return this.httpClient.post<any>(`${environment.apiURL}/user/`,newUser)
    //           .pipe(catchError(errorHandler));
  }
  getUser(){
    return this.httpClient.get<any>(`${environment.apiURL}/user/`);
  }


  getLoggedInUser() {
    let sessionStorage1 = JSON.parse(
      <string>sessionStorage.getItem('korisnik')
    );
    return sessionStorage1 == null ? null : sessionStorage1.korisnik;
  }

  

  // setLoggedInUser(saveUser: User) {
  //   sessionStorage.setItem(
  //     'korisnik',
  //     JSON.stringify({ korisnik: saveUser })
  //   );

  // }


  // userLogOut() {
  //   let tempUser = this. getLoggedInUser();
  //   sessionStorage.clear();
  //   return this.httpClient
  //     .put<User>(
  //       environment.apiURL + 'logout/' +  tempUser.id,
  //       tempUser
  //     )
  //     .pipe(catchError(errorHandler));
  // }
}

const errorHandler = (error: HttpErrorResponse) => {
  alert(error.error);
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(errorMessage);
};
