import { createAction, props } from '@ngrx/store';
import { create } from 'domain';
import { PlayerRank } from 'src/app/models/PlayerRank';

export const loadPlayers = createAction(
  '[Leaderboard] Load Players'
);

export const loadPlayersSuccess = createAction(
  '[Leaderboard] Load Players Success',
  props<{ players: PlayerRank[] }>()
);

export const loadPlayersFailure = createAction(
  '[Leaderboard] Load Players Failure',
  props<{ error: any }>()
);

export const loadPlayer = createAction(
  '[Leaderboard] Load Player',
  props<{ steamId: string }>()
);

export const loadPlayerSuccess = createAction(
  '[Leaderboard] Load Player Success',
  props<{ player: PlayerRank }>()
);

export const loadPlayerFailure = createAction(
  '[Leaderboard] Load Player Failure',
  props<{ error: any }>()
);

