import { createAction, props } from '@ngrx/store';
import { create } from 'domain';
import { ServerInfo } from 'src/app/models/ServerInfo';

export const loadServers = createAction(
  '[Servers] Load Servers'
);

export const loadServersSuccess = createAction(
  '[Servers] Load Servers Success',
  props<{ servers: ServerInfo[] }>()
);

export const loadServersFailure = createAction(
  '[Servers] Load Servers Failure',
  props<{ error: any }>()
);

export const alterServer = createAction(
  '[Servers] Server Alteration',
  props<{ update: ServerInfo }>()
);
