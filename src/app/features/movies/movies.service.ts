import {Injectable} from "@angular/core";
import {Movie} from "./movie.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [
    {
      title: 'Harry Potter',
      subtitle: 'And the Philosopher\'s Stone',
      url: 'https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_.jpg',
      rating: 5
    },
    {
      title: 'Red Notice',
      url: 'https://m.media-amazon.com/images/M/MV5BYzAzMDhlNzQtMGE2OC00ODU3LThlNDEtNDIzNzI0MjI4NDA5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      rating: 2
    },
    {
      title: 'Mission Impossible',
      subtitle: 'Fallout',
      url: 'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_FMjpg_UX1000_.jpg',
      rating: 5
    },
    {
      title: 'Zootopia',
      url: 'https://d1hwmph06ue357.cloudfront.net/new_test/wp-content/uploads/2019/01/Zootopia_2000x3000_01.jpg',
      rating: 4
    },
    {
      title: 'Grown ups',
      url: 'https://hips.hearstapps.com/esq.h-cdn.co/assets/17/25/1498165028-15-grown-ups-ver2-xlg.jpg',
      rating: 3
    },
    {
      title: 'Mall cop',
      url: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/230553_PAUL%20BLART%20MALL%20COP_1400x2100_Eng.jpg?itok=P_YIiJ6F',
      rating: 2
    },
    {
      title: 'Hobbit',
      subtitle: 'An unexpected journey',
      url: 'https://static.posters.cz/image/750/poster/der-hobbit-eine-unerwartete-reise-i34677.jpg',
      rating: 5
    },
    {
      title: 'Mr. & Mrs. Smith',
      url: 'https://m.media-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_FMjpg_UX1000_.jpg',
      rating: 4
    },
  ];

  getMovies(){
    return this.movies;
  }
}
