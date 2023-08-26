import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  watchlist: string[] = [];
  watchedList: string[] = [];

  addToWatchlist(movie: string) {
    if (!this.watchlist.includes(movie)) {
      this.watchlist.push(movie);
    }
  }

  removeFromWatchlist(movie: string) {
    const index = this.watchlist.indexOf(movie);
      this.watchlist.splice(index, 1);
  }
  
  removeFromWatched(movie: string) {
    const index = this.watchedList.indexOf(movie);    
      this.watchedList.splice(index, 1);
  }



  
  moveToWatched(movie: string) {
    const index = this.watchlist.indexOf(movie);
      const movedMovie = this.watchlist.splice(index, 1)[0];
      this.watchedList.push(movedMovie);
  }

  moveToWatchlist(movie: string) {
    const index = this.watchedList.indexOf(movie);
      const movedMovie = this.watchedList.splice(index, 1)[0];
      this.watchlist.push(movedMovie);
  }

  getWatchlist() {
    return this.watchlist;
  }

  getWatchedList() {
    return this.watchedList;
  }

  getWatchlistCount() {
    return this.watchlist.length;
  }

  getWatchedLisCount() {
    return this.watchedList.length;
  }

  setWatchlist(watchlist: any[]) {
    this.watchlist = watchlist;
  }

  setWatchedList(watchedList: any[]) {
    this.watchedList = watchedList;
  }
}