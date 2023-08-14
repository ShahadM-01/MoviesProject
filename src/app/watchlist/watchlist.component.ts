import { Component, ViewChild } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  movieItemComponent: MovieItemComponent;
  @ViewChild('movieItem') movieItem: MovieItemComponent;

  
}
