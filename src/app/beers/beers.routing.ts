import { Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

export const BeersRouting: Routes = [
  {
    path: 'beers',
    component: BeerListComponent
  },
  {
    path: 'beers/:id',
    component: BeerDetailComponent
  }
];
