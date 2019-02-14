import { createSelector } from '@ngrx/store';
import { DrinksState, getDrinksState } from './index';
import { BeersState } from './beers.state-type';

export const getBeers = (state: BeersState) => state.beers;

export const beersState = createSelector(
  getDrinksState,
  (state: DrinksState) => state.beersState
);

export const getBeersSelector = createSelector(
  beersState,
  getBeers
);
