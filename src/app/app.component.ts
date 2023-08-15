import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addForm: FormGroup;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl ('', Validators.required),
    });
  }

  addToWatchlist() {
    if (this.addForm.valid) {
      const movie = this.addForm.get('name').value;
      this.listService.addToWatchlist(movie);
      this.addForm.reset();
    }
  }
}