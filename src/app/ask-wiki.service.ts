import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskWikiService {
  data: object[];

  constructor(private http: HttpClient) { }

  getData = () => this.data ? this.data : [];

  getSearchResult(query: string, count: string): Observable<Object> {

    const url = `https://ru.wikipedia.org/w/api.php`;
    const options = {
      params: new HttpParams()
        .set('origin', '*')
        .set('action', 'opensearch')
        .set('format', 'json')
        .set('search', query)
        .set('limit', count)

    };

    return this.http.get(url, options);
  }
}
