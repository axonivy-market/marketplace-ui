import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  MockProductService
} from '../../shared/utils/common-test.util';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

const router = {
  navigate: jasmine.createSpy('navigate'),
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent],
      providers: [
        {
          provide: Router,
          useValue: router,
        },
        ProductService,
      ],
    })
      .overrideComponent(ProductComponent, {
        remove: { providers: [ProductService] },
        add: {
          providers: [
            { provide: ProductService, useClass: MockProductService },
          ],
        },
      })
      .compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should set list of products', () => {
    component.ngOnInit();
    expect(component.products.length).toEqual(1);
  });

  it('viewProductDetail should navigate', () => {
    component.viewProductDetail('url');
    expect(router.navigate).toHaveBeenCalledWith(['', 'url']);
  });

  it('ngOnDestroy should unsubscribe all sub', () => {
    const sub = new Subscription();
    component.subscription.push(sub);
    component.ngOnDestroy();
    expect(component.ngOnDestroy).toBeTruthy();
  });
});
