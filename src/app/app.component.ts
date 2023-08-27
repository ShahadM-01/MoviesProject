import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ListService } from './services/list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataStorageService } from './services/data-storage.service';
import { MovieService } from './services/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addForm: FormGroup;
  options: any[] = [];
  showOptions = false;
  message: string;

  @HostListener('document:click', ['$event'])
  @Output() clickOutside: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private listService: ListService,
    private dataStorage: DataStorageService,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.dataStorage.fetchList();
    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  addToWatchlist() {
    if (this.addForm.valid) {
      const movie = this.addForm.get('name').value;
      this.movieService.getMovieInfo(movie).subscribe((response) => {
        // Handle the movie information response 
        console.log(response);
        // Add the movie name to the watchlist
        this.listService.addToWatchlist(response);
        this.dataStorage.storeLists();
        this.addForm.reset();
      });
    }
  }


  handleInput(event: any) {
    const inputValue = event.target.value.toLowerCase();

    if (inputValue.length >= 0) {
      this.movieService.getMovieInfo(inputValue).subscribe((response) => {
        if (response.Search) {
          this.options = response.Search;
        }
        this.showOptions = !!inputValue;
      });
    }
  }

  getMoviePoster(option: any): string {
    return option.Poster;
  }

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    this.showOptions = false;
  }

  onSelectOption(option: any) {
    if (this.addForm.valid) {
      const movie = option;
      this.listService.addToWatchlist(movie);
      this.message= this.listService.displayMessage;
      this.dataStorage.storeLists();
    }
  }

}