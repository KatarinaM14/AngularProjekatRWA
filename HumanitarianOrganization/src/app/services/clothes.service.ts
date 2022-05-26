import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError } from 'rxjs';
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
