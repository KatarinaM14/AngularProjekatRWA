import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Food, FoodModel } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.httpClient
    .get<Food[]>(environment.apiURL + '/food')
    .pipe(catchError(errorHandler));
  }

  getById(id: number) {
    return this.httpClient
      .get<Food>(`${environment.apiURL}/food/${id}`)
      .pipe(catchError(errorHandler));
  }

  postFood(data: any){
    return this.httpClient.post<any>(`${environment.apiURL}/food/`, data)
    .pipe(catchError(errorHandler));
  }

  deleteFood(id:  number){
    return this.httpClient.delete(environment.apiURL + "/food/" + id);
  }
  // postFood(
  //   category: string,
  //   name: string,
  //   donor: string,
  //   image: string){
  //   return this.httpClient.post<any>(`${environment.apiURL}/food/`, {
  //     ...FoodModel,
  //     category,
  //     name,
  //     donor,
  //     image
  //   })
  //   .pipe(catchError(errorHandler));
  // }
}

const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(errorMessage);
};
