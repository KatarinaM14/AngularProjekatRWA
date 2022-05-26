import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient
    .get<Food[]>(environment.apiURL + '/food')
    .pipe(catchError(errorHandler));
  }

  getById(id: number) {
    return this.httpClient
      .get<Food>(`${environment.apiURL}/food/${id}`)
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
