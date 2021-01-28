import { createAction, props } from '@ngrx/store';
import { NewsArticle } from 'src/app/models/News';

export const loadNews = createAction(
  '[Home] Load News'
);

export const loadNewsSuccess = createAction(
  '[Home] Load News Success',
  props<{ news: NewsArticle[] }>()
);

export const loadNewsFailure = createAction(
  '[Home] Load News Failure',
  props<{ error: any }>()
);
