import { Component } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  constructor(public listService: ListService) {}

}