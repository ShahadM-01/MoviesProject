import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() name: string;
  @Input() btnName: string;

  constructor(private listService: ListService, private dataStorage: DataStorageService) { }
  ngOnInit(): void {

  }

  onDelete() {
    if (this.btnName === 'Watched') {
      this.listService.removeFromWatchlist(this.name);
    }
    else {this.listService.removeFromWatched(this.name);}
    this.dataStorage.storeLists();
  }

  onMove() {
    if (this.btnName === 'Watched') {
      this.listService.moveToWatched(this.name);
    }
    else {this.listService.moveToWatchlist(this.name);}
    this.dataStorage.storeLists();
  }
}
