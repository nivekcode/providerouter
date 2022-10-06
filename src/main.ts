import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, Routes} from "@angular/router";

const routes: Routes = [{ path: 'shows', loadComponent: () => import('./app/features/shows/shows.component').then(c => c.ShowsComponent) }, { path: 'movies', loadComponent: () => import('./app/features/movies/movies.component').then(c => c.MoviesComponent) }];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
