import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PlayerRank } from '../models/PlayerRank';
import { ServerQuery, Server } from '../models/Server';
import { NewsArticle } from '../models/News';
import { ServerInfo } from '../models/ServerInfo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  /**
   * getAllRank
   */
  public getAllRank(perPage: number, searchString = ''): Observable<PlayerRank[]> {
    return this.http.get<PlayerRank[]>(`${environment.endpoints.api.rank}/players?perPage=${perPage}&searchString=${searchString}`);
  }

  /**
   * getAllRank
   */
  public getRank(steamId: string): Observable<PlayerRank[]> {
    return this.http.get<PlayerRank[]>(`${environment.endpoints.api.rank}/player?steamId=${steamId}`);
  }


  /**
   * getServers
   */
  public getServers() {
    return this.http.get<Server[]>(`${environment.endpoints.api.serverInfo}/GetServers`);
  }

  /**
   * getServerQuery
   */
  public getServersInfo() {
    return this.http.get<ServerInfo[]>(`${environment.endpoints.api.serverInfo}`);
  }

  /**
   * getNews
   */
  public getNews() {
    return this.http.get<NewsArticle[]>(`${environment.endpoints.api.news}`);
  }

}
