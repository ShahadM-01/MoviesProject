import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataStorageService } from './services/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addForm: FormGroup;

  constructor(private listService: ListService, private dataStorage: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorage.fetchList();
    this.addForm = new FormGroup({
      name: new FormControl ('', Validators.required),
    });
  }

  addToWatchlist() {
    if (this.addForm.valid) {
      const movie = this.addForm.get('name').value;
      this.listService.addToWatchlist(movie);
      this.dataStorage.storeLists();
      this.addForm.reset();
    }
  }
}