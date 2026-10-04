import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./features/games/games.component').then((module) => module.GamesComponent),
	},
];
