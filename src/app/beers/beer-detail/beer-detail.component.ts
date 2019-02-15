import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/index';

import { select, Store } from '@ngrx/store';
import { DrinksState } from '../store';
import { getBeersSelector } from '../store/beers.selectors';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  public beers$: Observable<any>;

  id: number;
  beerDetail: object;

  constructor(
    private store: Store<DrinksState>,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    /**
     * Subscribe Observable to route params.
     */
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number.
    });

    /**
     * Get beers and filter by id to get the beer detail.
     */
    this.beers$ = this.store.pipe(select(getBeersSelector));
    this.beers$.subscribe(beers => {
      this.beerDetail = beers.find((beer: { id: number }) => beer.id === this.id);
    });
  }

  /**
   * Unsubscribe Observable on component destroy.
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Navigation push back to return to beer list.
   */
  backClicked() {
    this._location.back();
  }

  /**
   * Toggle difference between X and Y
   */
  toggleDifference() {
    console.log('toggle difference');
  }
}
