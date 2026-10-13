import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { GameItemComponent } from './game-item/game-item.component';
import { GamesSearchComponent } from './games-search/games-search.component';
import { GamesApiService } from './games-api.service';
import { Game } from './game.model';

@Component({
  selector: 'app-games',
  imports: [GameItemComponent, GamesSearchComponent],
  styleUrl: './games.component.scss',
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit {
  private readonly gamesApi = inject(GamesApiService);
  private readonly changeDetector = inject(ChangeDetectorRef);

  games: Game[] | null = null;

  ngOnInit(): void {
    this.gamesApi.getGames().subscribe((games) => {
      this.games = games;
      this.changeDetector.markForCheck();
    });
  }
}
