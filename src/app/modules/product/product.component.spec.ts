import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FilterType } from '../../shared/enums/filter-type.enum';
import { SortType } from '../../shared/enums/sort-type.enum';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { MockProductService } from '../../shared/mocks/mock-services';

const router = {
  navigate: jasmine.createSpy('navigate')
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent, TranslateModule.forRoot()],
      providers: [
        {
          provide: Router,
          useValue: router
        },
        ProductService,
        TranslateService,
        provideHttpClient()
      ]
    })
      .overrideComponent(ProductComponent, {
        remove: { providers: [ProductService] },
        add: {
          providers: [{ provide: ProductService, useClass: MockProductService }]
        }
      })
      .compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('viewProductDetail should navigate', () => {
    component.viewProductDetail('url');
    expect(router.navigate).toHaveBeenCalledWith(['', 'url']);
  });

  it('loadProductItems should return products with criteria', () => {

    component.loadProductItems();
    expect(component.loadProductItems).toBeTruthy();
  })

  it('ngOnDestroy should unsubscribe all sub', () => {
    const sub = new Subscription();
    component.subscriptions.push(sub);
    component.ngOnDestroy();
    expect(component.ngOnDestroy).toBeTruthy();
  });

  it('onFilterChange should filter products properly', () => {
    component.onFilterChange(FilterType.CONNECTORS);
    component.products().forEach((product) => {
      expect(product.type).toEqual('connector');
    });
  });

  it('onSortChange should order products properly', () => {
    component.onSearchChanged('cur');
    component.onSortChange(SortType.ALPHABETICALLY);
    for (let i = 0; i < component.products.length - 1; i++) {
      expect(
        component.products()[i + 1].name.localeCompare(component.products()[i].name)
      ).toEqual(1);
    }
  });

  it('search should return match products name', fakeAsync(() => {
    const productName = 'amazon comprehend';
    component.onSearchChanged(productName);
    tick(500);
    component.products().forEach((product) => {
      expect(product.name.toLowerCase()).toContain(productName);
    });
  }));

  it('setupIntersectionObserver should not trigger when init page', () => {
    component.ngAfterViewInit();
    expect(component.criteria.nextPageHref).toBeUndefined();
  });
});
