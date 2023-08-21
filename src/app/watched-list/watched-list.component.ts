import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.css']
})
export class WatchedListComponent {
  watchedlistSearchControl: FormControl = new FormControl('');

  constructor(public listService: ListService) {}
}