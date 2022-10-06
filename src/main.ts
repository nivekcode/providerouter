import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, Routes} from "@angular/router";

const routes: Routes = [{ path: 'shows', loadChildren: () => import('./app/features/shows/shows.module').then(m => m.ShowsModule) }, { path: 'movies', loadChildren: () => import('./app/features/movies/movies.module').then(m => m.MoviesModule) }];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: provideRouter(routes)
})
