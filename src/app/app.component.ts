import { Component, OnInit } from '@angular/core';
import { ListService } from './services/watchlist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addForm: FormGroup;

  constructor(private watchlistService: ListService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addToWatchlist() {
    if (this.addForm.valid) {
      const movie = this.addForm.get('name').value;
      this.watchlistService.addToWatchlist(movie);
      this.addForm.reset();
    }
  }
}