import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { GAMES } from './games.data';
import { GamesApiService } from './games-api.service';

describe('GamesApiService', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns the static games after two seconds', async () => {
    vi.useFakeTimers();
    const service = TestBed.configureTestingModule({ providers: [GamesApiService] }).inject(GamesApiService);
    let receivedGames: typeof GAMES | undefined;

    service.getGames().subscribe((games) => (receivedGames = games));

    expect(receivedGames).toBeUndefined();
    await vi.advanceTimersByTimeAsync(1999);
    expect(receivedGames).toBeUndefined();

    await vi.advanceTimersByTimeAsync(1);
    expect(receivedGames).toBe(GAMES);
  });
});