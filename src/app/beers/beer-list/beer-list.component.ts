import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import { DrinksState } from '../store';
import { getBeersSelector } from '../store/beers.selectors';
import { fetchBeersListRequest } from '../store/beers.actions';
import { filterArrayByName } from 'src/utils/filters/filters';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  public beers$: Observable<any>;
  filteredBeers: Array<object>;

  constructor(private store: Store<DrinksState>) {}

  ngOnInit() {
    this.store.dispatch(fetchBeersListRequest());
    this.beers$ = this.store.pipe(select(getBeersSelector));
    /**
     * Assign Observable result to filtered beers with a subscription.
     */
    this.beers$.subscribe(beers => {
      this.filteredBeers = beers;
    });
  }

  /**
   * Filter beers by name with every keystroke.
   */
  handleOnChange($event: string) {
    this.beers$.subscribe(beers => {
      this.filteredBeers = filterArrayByName(beers, $event);
    });
  }

  /**
   * Fetch more beers on scroll down.
   */
  onScroll() {
    console.log('Fetch more beers here');
  }
}
