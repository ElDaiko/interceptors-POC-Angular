import { Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokemonListComponent },
];
