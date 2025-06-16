import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../../interfaces/pokemon';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public pokemonResults$!: Observable<PokemonListResponse>;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonResults$ = this.pokemonService.getPokemonList();
  }
}
