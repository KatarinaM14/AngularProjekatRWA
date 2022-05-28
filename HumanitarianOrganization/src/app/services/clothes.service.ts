import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clothes } from '../models/clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Clothes[]>(environment.apiURL + '/clothes')
            .pipe(catchError(errorHandler));
  }

  getById(id: number){
    return this.httpClient.get<Clothes>(environment.apiURL + "/clothes/" + id)
    .pipe(catchError(errorHandler));
  }
}

const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(errorMessage);
};