import {Component} from '@angular/core';
import {NgFor} from "@angular/common";

import {MoviesService} from "./movies.service";
import {MovieCardComponent} from "./movie-card/movie-card.component";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: true,
  imports: [MovieCardComponent, NgFor]
})
export class MoviesComponent {

  movies = this.moviesService.getMovies();

  constructor(private moviesService: MoviesService) { }

}
