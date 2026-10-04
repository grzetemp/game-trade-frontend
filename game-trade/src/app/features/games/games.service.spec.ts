import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { GAMES } from './games.data';
import { GamesApiService } from './games-api.service';
import { GamesService } from './games.service';

describe('GamesService', () => {
  it('exposes and shares the games observable from the API service', () => {
    const getGames = vi.fn(() => of(GAMES));
    TestBed.configureTestingModule({
      providers: [GamesService, { provide: GamesApiService, useValue: { getGames } }],
    });
    const service = TestBed.inject(GamesService);
    const firstResult: unknown[] = [];
    const secondResult: unknown[] = [];

    service.games$.subscribe((games) => firstResult.push(games));
    service.games$.subscribe((games) => secondResult.push(games));

    expect(getGames).toHaveBeenCalledTimes(1);
    expect(firstResult).toEqual([GAMES]);
    expect(secondResult).toEqual([GAMES]);
  });
});