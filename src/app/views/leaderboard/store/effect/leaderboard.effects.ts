import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { loadServersSuccess } from '../action/servers.actions';

@Injectable()
export class ServersEffects {

  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadServers$ = createEffect(() => this.actions$.pipe(
    ofType('[Servers] Load Servers'),
    mergeMap(() => this.apiService.getServersInfo()
      .pipe(
        map(servers => loadServersSuccess({servers: servers})),
        catchError(() => of({ type: '[Servers] Load Servers Failure' }))
      ))
    )
  );
}
