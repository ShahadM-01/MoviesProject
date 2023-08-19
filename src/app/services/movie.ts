import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'aecab018'; // Replace with your actual API key from OMDB
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  getMovieInfo(movie: string): Observable<any> {
    const params = {
      apikey: this.apiKey,
      t: movie
    };
    return this.http.get(this.apiUrl, { params });
  }
}