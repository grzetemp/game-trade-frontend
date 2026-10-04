import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Game } from './game.model';
import { GamesApiService } from './games-api.service';

@Injectable({ providedIn: 'root' })
export class GamesService {
  readonly games$: Observable<Game[]> = inject(GamesApiService)
    .getGames()
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));
}