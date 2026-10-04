import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-games-search',
  imports: [MatFormFieldModule, MatInputModule],
  styleUrl: './games-search.component.scss',
  templateUrl: './games-search.component.html',
})
export class GamesSearchComponent {}