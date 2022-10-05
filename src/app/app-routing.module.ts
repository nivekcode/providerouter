import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'shows', loadChildren: () => import('./features/shows/shows.module').then(m => m.ShowsModule) }, { path: 'movies', loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
