import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators'
import { of } from 'rxjs/index';
import { BeersService } from '../beers.service';
import {
  FETCH_BEERS_REQUEST,
  fetchBeersListFailed,
  fetchBeersListResponse,
} from './beers.actions';
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from '../../../utils/local-storage/local-storage';

@Injectable()
export class BeersEffects {
  constructor(
    private actions$: Actions,
    private beersService: BeersService,
  ) {}

  @Effect() fetchBeers = this.actions$
    .pipe(
      ofType(FETCH_BEERS_REQUEST),
      switchMap(() => {
        /**
         * Check if the beers are already in the local storage.
         */
        const beersStored = getLocalStorageItem('beers');
        if (beersStored) {
          return Promise.resolve();
        } else {
          return this.beersService.getBeers();
        }
      }),
      map((res) => {
        /**
         * Get local storage data or use the fetched data.
         */
        const beersStored = getLocalStorageItem('beers') || res;
        setLocalStorageItem('beers', beersStored);
        return fetchBeersListResponse(beersStored);
      }),
      catchError(() => of(fetchBeersListFailed())),
    );
}
