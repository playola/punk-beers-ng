import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  constructor(private http: HttpClient) { }

  public getBeers(page = 1): Observable<any> {
    return this.http.get(`https://api.punkapi.com/v2/beers?page=${page}`);
  }
}
