import {Component} from '@angular/core';
import {MoviesService} from "./movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movies = this.moviesService.getMovies();

  constructor(private moviesService: MoviesService) { }

}
