import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PlayerRank } from '../models/PlayerRank';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  /**
   * getAllRank
   */
  public getAllRank(perPage: number): Observable<PlayerRank[]> {
    return this.http.get<PlayerRank[]>(`${environment.api.endpoints.rank}/players?perPage=${perPage}`);
  }

  /**
   * getAllRank
   */
  public getRank(steamId: string): Observable<PlayerRank[]> {
    return this.http.get<PlayerRank[]>(`${environment.api.endpoints.rank}/player?steamId=${steamId}`);
  }

}
