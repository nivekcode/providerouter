import {Component, Input} from "@angular/core";
import {Movie} from "../movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: 'movie-card.component.html'
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
}
