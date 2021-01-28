import { Action, createReducer, on } from '@ngrx/store';
import * as PlayersActions from '../action/leaderboard.actions';
import { ServerInfo } from 'src/app/models/ServerInfo';
import { PlayerRank } from 'src/app/models/PlayerRank';


export const serversFeatureKey = 'players';

export interface PlayersState {
  players: PlayerRank[];
  selectedPlayer: PlayerRank;
}

export const initialState: PlayersState = {
  players: [],
  selectedPlayer: null
};

export const playersReducer = createReducer(
  initialState,
  on(PlayersActions.loadPlayersSuccess, (state, { players }) => ({ players: players })),
  on(PlayersActions.loadPlayerSuccess, (state, { player }) => {
    return ({ selectedPlayer: player });
  })
);

export function reducer(state: PlayersState | undefined, action: Action) {
  return playersReducer(state, action);
}

