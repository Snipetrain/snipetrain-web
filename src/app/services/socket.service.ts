import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { loadServersSuccess } from '../views/servers/store/action/servers.actions';
import { ServersState } from '../views/servers/store/reducer/servers.reducer';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private serverInfoHub: signalR.HubConnection;

  constructor(private serversStore: Store<ServersState>) { }

  // Init
  public connect(): void {
    this.serverInfoHub = new signalR.HubConnectionBuilder()
      .withUrl(environment.endpoints.socket.serverInfo, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.serverInfoHub.start()
      .then(() => {
        console.log('[ServerHub] Succesfully subscribed to Servers Hub.');
      })
      .catch((err) => {
        console.error('[ServerHub] An error occured while trying to subscribe to Servers hub.', err)
      });

    this.listen();
  }

  // Listen to events
  private listen(): void {
    this.serverInfoHub.on('ServerInfoUpdate', (data) => {
      this.serversStore.dispatch(loadServersSuccess({servers: data}));
    });
  }

}
