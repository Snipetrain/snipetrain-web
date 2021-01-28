import { Action, createReducer, on } from '@ngrx/store';
import * as ServersAction from '../action/servers.actions';
import { ServerInfo } from 'src/app/models/ServerInfo';
import { state } from '@angular/animations';
import { stat } from 'fs';


export const serversFeatureKey = 'servers';

export interface ServersState {
  servers: ServerInfo[];
}

export const initialState: ServersState = {
  servers: []
};


export const serversReducer = createReducer(
  initialState,
  on(ServersAction.loadServersSuccess, (state, { servers }) => {
    if (state.servers.length > 0) {
      servers = state.servers.map(oldServer => {
        return {
          flipped: oldServer.flipped,
          server: servers.find(newServer => newServer.server.id === oldServer.server.id).server
        }
      })
    }
    return {servers: servers};
  }),
  on(ServersAction.alterServer, (state, { update }) => {
    const index = state.servers.indexOf(state.servers.find(s => s.server.id === update.server.id));
    return {
      ...state.servers,
      servers: [
        ...state.servers.slice(0, index),
        update,
        ...state.servers.slice(index + 1)
      ]
    }
  }),
);

export function reducer(state: ServersState | undefined, action: Action) {
  return serversReducer(state, action);
}

