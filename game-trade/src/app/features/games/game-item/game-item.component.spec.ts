import { TestBed } from '@angular/core/testing';
import { GAMES } from '../games.data';
import { GameItemComponent } from './game-item.component';

describe('GameItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameItemComponent],
    }).compileComponents();
  });

  it('should display the provided game title, image, and price', () => {
    const fixture = TestBed.createComponent(GameItemComponent);
    fixture.componentRef.setInput('game', GAMES[0]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent.trim()).toBe('Catch & Calm');
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe(GAMES[0].imageUrl);
    expect(fixture.nativeElement.querySelector('.game-price').textContent.trim()).toBe(
      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(GAMES[0].price),
    );
  });
});