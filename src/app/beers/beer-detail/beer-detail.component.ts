import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DrinksState } from '../store';
import { getBeersSelector } from '../store/beers.selectors';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit, OnDestroy {
  id: number;
  beerDetail: {
    id: number,
    name: string,
    description: string,
    first_brewed: string,
    image_url: string,
    food_pairing: Array<string>,
    adv: string,
    ibu: string,
    contributed_by: string,
  } = {
    id: 0,
    name: 'playola',
    description: 'dummy description',
    first_brewed: '',
    image_url: '',
    food_pairing: [],
    adv: '0',
    ibu: '0',
    contributed_by: 'playola',
  };
  private sub: any;
  public beers$: Observable<any>;

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
     * Get beer detail by id.
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
}
