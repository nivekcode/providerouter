import {Component, Input} from "@angular/core";
import {NgFor} from "@angular/common";

import {Movie} from "../movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: 'movie-card.component.html',
  standalone: true,
  imports: [
    NgFor
  ]
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
}
