import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Game } from './game.model';
import { GAMES } from './games.data';

@Injectable({ providedIn: 'root' })
export class GamesApiService {
  getGames(): Observable<Game[]> {
    return of(GAMES).pipe(delay(2000));
  }
}