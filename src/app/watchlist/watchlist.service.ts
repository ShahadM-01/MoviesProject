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
    removeFromWatchlist(movie: string) {
        const index = this.watchlist.indexOf(movie);
        if (index !== -1) {
            this.watchlist.splice(index, 1);
        }
    }


}