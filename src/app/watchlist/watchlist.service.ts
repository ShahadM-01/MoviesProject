import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  watchlist: string[] = [];

  addToWatchlist(movie: string) {
    if (!this.watchlist.includes(movie)) {
      this.watchlist.push(movie);
    }
  }


}