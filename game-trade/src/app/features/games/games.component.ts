import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GameItemComponent } from './game-item/game-item.component';
import { GamesSearchComponent } from './games-search/games-search.component';
import { GamesService } from './games.service';

@Component({
  selector: 'app-games',
  imports: [
    AsyncPipe,
    GameItemComponent,
    GamesSearchComponent,
  ],
  styleUrl: './games.component.scss',
  templateUrl: './games.component.html',
})
export class GamesComponent {
  readonly games$ = inject(GamesService).games$;
}