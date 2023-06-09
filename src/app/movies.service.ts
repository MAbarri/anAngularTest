import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY = "56ae67b03cfd6da4d9fffb6eda188042"; //Should be Stored in ENV
  private BASE_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/movie/${id}?api_key=${this.API_KEY}`);
  }
}
