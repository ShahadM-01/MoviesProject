import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  watchlist: any[] = [];
  watchedList: any[] = [];

  // addToWatchlist(movie: any) {
  //   const movieExistsInWatchlist = this.watchlist.some(item => item.imdbID === movie.imdbID);
  //   const movieExistsInWatchedList = this.watchedList.some(item => item.imdbID === movie.imdbID);
  //   if (!movieExistsInWatchlist && !movieExistsInWatchedList) {
  //     this.watchlist.push(movie);
  //   }
  // }


  displayMessage: string = '';

  addToWatchlist(movie: any) {
    const movieExistsInWatchlist = this.watchlist.some(item => item.imdbID === movie.imdbID);
    const movieExistsInWatchedList = this.watchedList.some(item => item.imdbID === movie.imdbID);

    let message = '';

    if (movieExistsInWatchlist) {
      message = 'Movie is already added to the watchlist.';
    } else if (movieExistsInWatchedList) {
      message = 'Movie is already added to the watched list.';
    } else {
      this.watchlist.push(movie);
    }

    this.displayMessage = message;
  }


  removeFromWatchlist(movie: string) {
    const index = this.watchlist.findIndex(item => item.Title === movie);
    if (index !== -1) {
      this.watchlist.splice(index, 1);
      console.log(index);
    }

  }

  removeFromWatched(movie: string) {
    const index = this.watchedList.findIndex(item => item.Title === movie);
    if (index !== -1) {
      this.watchedList.splice(index, 1);
      console.log(index);
    }
  }

  moveToWatched(movie: string) {
    const index = this.watchlist.findIndex(item => item.Title === movie);
    if (index !== -1) {
      const movedMovie = this.watchlist.splice(index, 1)[0];
      this.watchedList.push(movedMovie);
    }
  }

  moveToWatchlist(movie: string) {
    const index = this.watchedList.findIndex(item => item.Title === movie);
    if (index !== -1) {
      const movedMovie = this.watchedList.splice(index, 1)[0];
      this.watchlist.push(movedMovie);
    }
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