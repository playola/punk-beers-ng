import { async, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { BeerDetailComponent } from './beer-detail.component';
import { DrinksState } from '../store';
import { fetchBeersListRequest } from '../store/beers.actions';

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let store: Store<DrinksState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      declarations: [
        BeerDetailComponent
      ],
      providers: [
        Store
      ]
    });

    component = TestBed.createComponent(BeerDetailComponent).componentInstance;
    store = TestBed.get(Store);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should fetch data and initialize beers list', () => {
      spyOn(store, 'dispatch').and.callThrough();

      component.ngOnInit();

      expect(store.dispatch).toHaveBeenCalledWith(fetchBeersListRequest());
      expect(component.beers$).toBeDefined();
    })
  })
});
