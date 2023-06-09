import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashRegisterComponent } from './cash-register/cash-register.component';
import { AppComponent } from './app.component';
import { MoviesBrowserComponent } from './movies-browser/movies-browser.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesResolver } from './movies.resolver';
import { MoviesFavoriteComponent } from './movies-favorite/movies-favorite.component';

const routes: Routes = [
  { path: '', component: CashRegisterComponent },
  { path: 'register', component: CashRegisterComponent },
  { path: 'movies', component: MoviesBrowserComponent },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
    resolve: { movie: MoviesResolver }
  },
  { path: 'favorites', component: MoviesFavoriteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
