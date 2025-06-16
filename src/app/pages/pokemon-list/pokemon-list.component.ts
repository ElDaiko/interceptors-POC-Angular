import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { PokemonListResponse } from '../../interfaces/pokemon';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent, ErrorMessageComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public pokemonResults$!: Observable<PokemonListResponse>;
  public errorMessage!: string;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonResults$ = this.pokemonService.getPokemonList().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
