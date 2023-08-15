import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() name: string;
  @Input() index: number;
  @Input() btnName: string;

constructor(private watchlistService: ListService){}
  ngOnInit(): void {

  }

  onDelete(){
    if(this.btnName === 'Watched'){
      this.watchlistService.removeFromWatchlist(this.name);
    }
    else this.watchlistService.removeFromWatched(this.name);
  }
}
