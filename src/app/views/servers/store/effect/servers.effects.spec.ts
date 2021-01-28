import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ServersEffects } from './servers.effects';

describe('ServersEffects', () => {
  let actions$: Observable<any>;
  let effects: ServersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ServersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
