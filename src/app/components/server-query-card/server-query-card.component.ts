import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Server, SrcdServer, ServerQuery } from 'src/app/models/Server';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-server-query-card',
  templateUrl: './server-query-card.component.html',
  styleUrls: ['./server-query-card.component.scss']
})
export class ServerQueryCardComponent implements OnInit, OnDestroy {

  @Input() serverQuery: Server;
  @Input() inversed = false;

  serverData: {map: string, players: number, max: number};

  intervalHandle: number;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.updateServerData();

    this.intervalHandle = window.setInterval(() => {
      this.updateServerData();
    }, environment.serverQueryInterval);
  }

  private updateServerData(): void {
    this.api.getServerQuery(this.serverQuery.hostname, this.serverQuery.srcdServers[0].port)
    .subscribe(val => {
      this.serverData = {
        map: val.map,
        players: val.players,
        max: val.maxPlayers
      };
    }, err => {
      console.error(err);
      this.serverData = null;
    });
  }

  ngOnDestroy() {
    window.clearInterval(this.intervalHandle);
  }
}
