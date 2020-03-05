import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NflStatsApiService {

  rushingStatsEndpoint = '/rushing';

  constructor(private http: HttpClient) { }
  getRushingStats(params): Observable<any[]> {
    return this.http.get<any[]>(this.rushingStatsEndpoint, { params: params });
  }
}
