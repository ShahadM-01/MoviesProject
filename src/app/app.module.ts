import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataStorageService } from './services/data-storage.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchedListComponent } from './watched-list/watched-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import {HttpClientModule} from '@angular/common/http'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { ListService } from './services/list.service';
import { MovieService } from './services/movie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    WatchedListComponent,
    MovieItemComponent,
    SearchComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataStorageService, MovieService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
