import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerButtonComponent } from './shared/beer-button.component';
import { BeersRouting } from './beers.routing';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { beersReducers } from './store';
import { BeersEffects } from './store/beers.effects';
import { BeersService } from './beers.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeersRouting),
    StoreModule.forFeature('drinks', beersReducers),
    EffectsModule.forFeature([BeersEffects]),
    InfiniteScrollModule,
  ],
  declarations: [
    BeerListComponent,
    BeerDetailComponent,
    BeerButtonComponent,
  ],
  providers: [
    BeersService,
  ],
})
export class BeersModule { }
