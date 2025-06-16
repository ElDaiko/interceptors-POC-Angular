import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PokemonListResponse } from '../../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonListResponse> {
    return this.http
      .get<PokemonListResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0aa'
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }

          return throwError(() => {
            new Error(errorMessage);
          });
        })
      );
  }
}
