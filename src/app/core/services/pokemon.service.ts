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
    return this.http.get<PokemonListResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0aa'
    );
  }
}
