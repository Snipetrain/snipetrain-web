import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../action/home.actions';
import { NewsArticle } from 'src/app/models/News';


export const homeFeatureKey = 'home';

export interface HomeState {
  newsArticles: NewsArticle[];
}

export const initialState: HomeState = {
  newsArticles: []
};

export const homeReducer = createReducer(
  initialState,
  on(HomeActions.loadNewsSuccess, (state, { news }) => ({ newsArticles: news }))
);

export function reducer(state: HomeState | undefined, action: Action) {
  return homeReducer(state, action);
}

