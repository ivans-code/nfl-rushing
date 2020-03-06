import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NflStatsApiService {

  rushingStatsEndpoint = 'http://localhost:3000/rushing';
  autoCompleteEndpoint = 'http://localhost:3000/autocomplete';

  constructor(private http: HttpClient) { }

  getRushingStats(params): Observable<any[]> {
    return this.http.get<any[]>(this.rushingStatsEndpoint, { params: params });
  }

  getAutocomplete(params): Observable<any[]> {
    return this.http.get<any[]>(this.autoCompleteEndpoint, { params: params });
  }

  getPlayerRushStats(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.rushingStatsEndpoint + '/' + id);
  }
}
