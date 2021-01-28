import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { loadNewsSuccess } from '../action/home.actions';

@Injectable()
export class HomeEffects {

  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType('[Home] Load News'),
    mergeMap(() => this.apiService.getNews()
      .pipe(
        map(news => loadNewsSuccess({news: news})),
        catchError(() => of({ type: '[Home] Load News Failure' }))
      ))
    )
  );
}
