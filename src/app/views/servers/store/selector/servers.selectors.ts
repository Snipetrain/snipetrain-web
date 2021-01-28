import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as serversReducer from '../reducer/servers.reducer';

export const selectHomeState = createFeatureSelector<serversReducer.ServersState>(
  serversReducer.serversFeatureKey,
);

export const selectServers = createSelector(
  selectHomeState,
  (state: serversReducer.ServersState) => state.servers
);
