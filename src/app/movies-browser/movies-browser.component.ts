import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-browser',
  templateUrl: './movies-browser.component.html',
  styleUrls: ['./movies-browser.component.css']
})
export class MoviesBrowserComponent implements OnInit {

  searchQuery: string = '';
  movies: any[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }


  search(): void {
    this.movieService.searchMovies(this.searchQuery).subscribe(response => {
      this.movies = response.results;
      this.movies = this.movies.map(movie => {
        return {
          ...movie,
          liked: localStorage.getItem(`movie_${movie.id}_liked`) === 'true',
          favorited: localStorage.getItem(`movie_${movie.id}_favorited`) === 'true',
        };
      });
    });
  }

  toggleLike(movie: any): void {
    movie.liked = !movie.liked;
    localStorage.setItem(`movie_${movie.id}_liked`, `${movie.liked}`);
  }

  toggleFavorite(movie: any): void {
    movie.favorited = !movie.favorited;
    localStorage.setItem(`movie_${movie.id}_favorited`, `${movie.favorited}`);
  }
}
