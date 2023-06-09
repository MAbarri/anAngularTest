import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashRegisterComponent } from './cash-register/cash-register.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { MoviesBrowserComponent } from './movies-browser/movies-browser.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesFavoriteComponent } from './movies-favorite/movies-favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    CashRegisterComponent,
    NavComponent,
    MoviesBrowserComponent,
    MovieDetailComponent,
    MoviesFavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
