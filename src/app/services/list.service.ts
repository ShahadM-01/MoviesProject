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
    if (index !== -1) {
      this.watchlist.splice(index, 1);
    }
  }
  
  removeFromWatched(movie: string) {
    const index = this.watchedList.indexOf(movie);
    if (index !== -1) {
      this.watchedList.splice(index, 1);
    }
  }
  moveToWatched(movie: string) {
    this.removeFromWatchlist(movie);
    this.watchedList.push(movie);
  }

  moveToWatchlist(movie: string) {
    this.removeFromWatched(movie);
    this.watchlist.push(movie);
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

  getWatchedLisCountt() {
    return this.watchedList.length;
  }

  setWatchlist(watchlist: any[]) {
    this.watchlist = watchlist;
  }

  setWatchedList(watchedList: any[]) {
    this.watchedList = watchedList;
  }
}