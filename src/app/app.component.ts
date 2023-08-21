import { Component, OnInit } from '@angular/core';
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

        // Extract the movie name from the response
        

        // Add the movie name to the watchlist
        this.listService.addToWatchlist(response);
        this.dataStorage.storeLists();
        this.addForm.reset();
      });
    }
  }

  handleInput(event: any) {
    const inputValue = event.target.value.toLowerCase();

    if (inputValue.length >= 1) {
      this.movieService.getMovieInfo(inputValue).subscribe((response) => {
        if (response.Search) {
          this.options = response.Search;
          console.log(1);
          
        } else {
          this.options = [];
          console.log(2);
          
        }
        this.showOptions = !!inputValue;
      });
    } else {
      this.options = [];
      this.showOptions = false;
      console.log(3);
      
    }
  }

  selectOption(option: any) {
    // Do something with the selected option
  }

  getMoviePoster(option: any): string {
    return option.Poster;
  }
}