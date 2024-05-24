import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import {
  MOCK_PRODUCT,
  MockProductService,
} from '../../../shared/utils/common-test.util';
import { ProductService } from '../product.service';
import { ProductDetailComponent } from './product-detail.component';

let PRODUCT_ID: string | undefined = '1';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: PRODUCT_ID },
            },
          },
        },
      ],
    })
      .overrideComponent(ProductDetailComponent, {
        remove: { providers: [ProductService] },
        add: {
          providers: [
            { provide: ProductService, useClass: MockProductService },
          ],
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.product.name).toEqual(MOCK_PRODUCT.name);
  });
});
