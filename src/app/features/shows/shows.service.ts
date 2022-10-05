import {Injectable} from "@angular/core";
import {Show} from "./shows.model";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private shows: Show[] = [
    {
      name: 'Stranger Things',
      url: 'https://anakin022.files.wordpress.com/2016/07/strangerthings1.jpg?w=596&h=596&crop=1',
      rating: 4
    },
    {
      name: 'Game of Thrones',
      url: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
      rating: 5
    },
    {
      name: 'Peaky Blinders',
      url: 'https://images.justwatch.com/poster/178308115/s718/peaky-blinders.%7Bformat%7D',
      rating: 5
    },
    {
      name: 'Queens Gambit',
      url: 'https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg',
    rating: 3
    },
    {
      name: 'Breaking Bad',
      url: 'http://images.genius.com/2562509e21b27429361d7b0ee4400040.600x600x1.jpg',
      rating: 5
    },
    {
      name: 'Prison Break',
      url: 'https://www.tvguide.com/a/img/catalog/provider/1/1/1-9144071250.jpg',
      rating: 4
    },
    {
      name: 'House of Dragons',
      url: 'https://assets-prd.ignimgs.com/2020/12/03/game-of-thrones-house-of-the-dragon-poster1-1607025967204-1607026873992.jpg',
      rating: 4
    },
    {
      name: 'Black Mirror',
      url: 'https://static.wikia.nocookie.net/black-mirror/images/f/f6/Black_Mirror_Netflix_Poster.jpg/revision/latest?cb=20171230155236&path-prefix=de',
      rating: 4
    }
  ];

  getShows() {
    return this.shows;
  }
}
