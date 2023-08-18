import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges {
  @Input() query: string = '';
  searchResults: string[] = [];

  constructor(private listService: ListService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.query && this.query) {
      this.performSearch();
    } else {
      this.searchResults = [];
    }
  }

  performSearch() {
    const watchlist = this.listService.getWatchlist();
    this.searchResults = watchlist.filter(item =>
      item.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  getIncrementalResults(): string[] {
    return this.searchResults.slice(0, this.query.length);
  }
}