import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<boolean> {
  constructor(private moviesService: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if(id)
      return this.moviesService.getMovieDetails(id);
    else throw new Error('No movie ID found');
  }
}
