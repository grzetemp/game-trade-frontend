import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { GamesComponent } from './games.component';
import { GAMES } from './games.data';
import { Game } from './games.data';
import { GamesService } from './games.service';

describe('GamesComponent', () => {
  let gamesSubject: Subject<Game[]>;

  beforeEach(async () => {
    gamesSubject = new Subject<Game[]>();
    await TestBed.configureTestingModule({
      imports: [GamesComponent],
      providers: [{ provide: GamesService, useValue: { games$: gamesSubject.asObservable() } }],
    }).compileComponents();
  });

  it('should keep the heading and search visible until games arrive', () => {
    const fixture = TestBed.createComponent(GamesComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.games')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Find your next game');
    expect(fixture.nativeElement.querySelector('app-games-search')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.games-grid')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('.loading-state')).toBeFalsy();

    gamesSubject.next(GAMES);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.games-grid')).toBeTruthy();
    expect(fixture.nativeElement.querySelectorAll('.game-card').length).toBe(9);
    expect(fixture.nativeElement.querySelector('mat-paginator')).toBeFalsy();
    expect(fixture.nativeElement.querySelectorAll('button').length).toBe(9);
    expect(Array.from(fixture.nativeElement.querySelectorAll('.game-card h2') as NodeListOf<HTMLHeadingElement>).map((heading) => heading.textContent.trim())).toEqual([
      'Catch & Calm',
      'Restoration Realm',
      'Ashes of the Hamlet',
      'The Cut & Craft',
      'Spark of Tomorrow',
      'Beyond the Celestial Rim',
      'Abyssal Echoes',
      'Timber & Hearth',
      'Xenoshock: Frontier',
    ]);
  });

  it('should keep all games visible when text is entered in the search box', () => {
    const fixture = TestBed.createComponent(GamesComponent);
    fixture.detectChanges();
    gamesSubject.next(GAMES);
    fixture.detectChanges();

    const searchInput = fixture.nativeElement.querySelector('input');
    searchInput.value = 'restoration';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(searchInput.value).toBe('restoration');
    expect(fixture.nativeElement.querySelectorAll('.game-card').length).toBe(9);
  });
});