import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges {
  @Input() query: string = '';
  @Input() listName: string = '';
  searchResults: string[] = [];

  constructor(private listService: ListService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.query && this.query) {
      this.performSearch();
    } else {
      this.searchResults = [];
    }
  }

  performSearch() {
    if (this.listName === 'watchlist') {
      const watchlist = this.listService.getWatchlist();
      this.searchResults = watchlist.filter(item =>
        item.toLowerCase().includes(this.query.toLowerCase())
      );
    } else if (this.listName === 'watchedlist') {
      const watchedlist = this.listService.getWatchedList();
      this.searchResults = watchedlist.filter(item =>
        item.toLowerCase().includes(this.query.toLowerCase())
      );
    }

    if (this.searchResults.length === 0) {
      this.searchResults = ['Nothing Found'];
    }
  }
}
