import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  watchlistSearchControl: FormControl = new FormControl('');

  constructor(public listService: ListService) {}

}