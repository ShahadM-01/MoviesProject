import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  watchlistSearchControl: FormControl = new FormControl('');

  constructor(public listService: ListService) {}

}