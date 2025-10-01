import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WikipediaResponse } from '../models/wikipedia.model';

@Injectable({
  providedIn: 'root',
})
export class Wikipedia {
  private readonly API_URL = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<{ title: string; snippet: string }[]> {
    const params = {
      action: 'query',
      list: 'search',
      srsearch: term,
      format: 'json',
      origin: '*',
    };

    return this.http
      .get<WikipediaResponse>(this.API_URL, { params })
      .pipe(map((response) => response.query.search));
  }
}
