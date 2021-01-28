import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as homeReducer from '../reducer/home.reducer';

export const selectHomeState = createFeatureSelector<homeReducer.HomeState>(
  homeReducer.homeFeatureKey,
);

export const selectNews = createSelector(
  selectHomeState,
  (state: homeReducer.HomeState) => state.newsArticles
);
