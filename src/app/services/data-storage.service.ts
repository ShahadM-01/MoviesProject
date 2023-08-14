import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private apiUrl = 'http://www.omdbapi.com';
  private apiKey = 'aecab018';

  constructor(private http: HttpClient) { }

  getMoviesByTitle(title: string) {
    const params = {
      apikey: this.apiKey,
      t: title
    };

    return this.http.get<any>(this.apiUrl, { params });
  }
}