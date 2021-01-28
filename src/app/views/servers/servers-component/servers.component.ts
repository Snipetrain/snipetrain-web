import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Players, Server, ServerInfo } from 'src/app/models/ServerInfo';
import { loadNewsSuccess } from '../../home/store/action/home.actions';
import { alterServer, loadServers, loadServersSuccess } from '../store/action/servers.actions';
import { ServersState } from '../store/reducer/servers.reducer';
import { selectServers } from '../store/selector/servers.selectors';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  public servers$: Observable<ServerInfo[]>;

  constructor(private store: Store<ServersState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadServers());
    this.servers$ = this.store.select(selectServers);
    this.servers$.subscribe(serverInfos => console.log(serverInfos));
  }


  public getTeamPlayers(teamName: string, players: Players) {
    return players.player.filter(p => p.team === teamName);
  }

  public flipCard(server: ServerInfo) {
    const serverClone = {...server};
    this.store.dispatch(alterServer({update: {...serverClone, ...{flipped: !serverClone.flipped}}}));
  }

}
