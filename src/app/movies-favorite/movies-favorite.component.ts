import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-favorite',
  templateUrl: './movies-favorite.component.html',
  styleUrls: ['./movies-favorite.component.css']
})
export class MoviesFavoriteComponent implements OnInit {

  favorites: any[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes('_favorited') && localStorage.getItem(key) === 'true') {
        const id = key.split('_')[1]; // Get the ID from the key
        this.favorites.push(id);
      }
    }
  }
}
