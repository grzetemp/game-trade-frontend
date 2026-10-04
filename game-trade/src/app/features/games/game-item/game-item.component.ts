import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Game } from '../games.data';

@Component({
  selector: 'app-game-item',
  imports: [CurrencyPipe, MatButtonModule, MatCardModule],
  styleUrl: './game-item.component.scss',
  templateUrl: './game-item.component.html',
})
export class GameItemComponent {
  readonly game = input.required<Game>();
  readonly priority = input(false);
}