import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListService } from './list.service';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private listService: ListService) { }
  storeLists() {
    const watchlist = this.listService.getWatchlist();
    const watchedList = this.listService.getWatchedList();
    this.http.put('https://movie-2d563-default-rtdb.firebaseio.com/watchlist.json', watchlist).subscribe(
      response => {
      }
    );

    this.http.put('https://movie-2d563-default-rtdb.firebaseio.com/watchedList.json', watchedList).subscribe(
      response => {
      }
    );

  }

  fetchList() {
    this.http.get('https://movie-2d563-default-rtdb.firebaseio.com/watchlist.json').subscribe(watchlist => {
      if (watchlist) {
        const watchlistArray = Object.values(watchlist);
        this.listService.setWatchlist(watchlistArray);
      }
    });
    this.http.get('https://movie-2d563-default-rtdb.firebaseio.com/watchedList.json').subscribe(watchedList => {
      if (watchedList) {
        const watchedListArray = Object.values(watchedList);
        this.listService.setWatchedList(watchedListArray);
      }
    });
  }
}