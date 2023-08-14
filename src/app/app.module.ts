import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchedListComponent } from './watched-list/watched-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WatchlistComponent,
    WatchedListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
