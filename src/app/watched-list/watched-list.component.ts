import { Component } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.css']
})
export class WatchedListComponent {
  constructor(public listService: ListService) {}

}
