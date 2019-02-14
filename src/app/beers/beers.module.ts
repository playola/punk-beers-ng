import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersRouting } from './beers.routing';
import { beersReducers } from './store';
import { BeersEffects } from './store/beers.effects';
import { BeersService } from './beers.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeersRouting),
    StoreModule.forFeature('drinks', beersReducers),
    EffectsModule.forFeature([BeersEffects])
  ],
  declarations: [
    BeerListComponent,
    BeerDetailComponent
  ],
  providers: [
    BeersService
  ]
})
export class BeersModule { }
