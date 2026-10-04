import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-item',
  imports: [MatButtonModule, MatCardModule],
  styleUrl: './game-item.component.scss',
  templateUrl: './game-item.component.html',
})
export class GameItemComponent {
  readonly game = input.required<Game>();
  readonly priority = input(false);
}