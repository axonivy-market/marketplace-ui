import { TestBed } from '@angular/core/testing';

import {
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FilterType } from '../../shared/enums/filter-type.enum';
import { SortType } from '../../shared/enums/sort-type.enum';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';
import { Criteria } from '../../shared/models/criteria.model';
import { ProductService } from './product.service';
import { Product } from '../../shared/models/product.model';

const PRODUCT_ID = 'portal';
const NOT_EXIST_ID = 'undefined';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllProducts should return list of product', () => {
    service.getAllProducts().subscribe((products) => {
      expect(products.length).toBeGreaterThan(0);
    });
  });

  it('getProductById should return a product', () => {
    service.getProductById(PRODUCT_ID).subscribe((data) => {
      expect(data.id).toEqual(PRODUCT_ID);
    });
  });

  it('getProductById should return null product', () => {
    service.getProductById(NOT_EXIST_ID).subscribe((data) => {
      expect(data).toEqual({} as Product);
    });
  });

  it('getProductByCriteria with should return products properly', () => {
    const searchString = 'amazon';
    const criteria: Criteria = {
      search: searchString,
      sort: SortType.ALPHABETICALLY,
      type: FilterType.CONNECTORS
    };
    service.getProductsByCriteria(criteria).subscribe((products) => {
      for (let i = 0; i < products.length; i++) {
        expect(products[i].type).toEqual(FilterType.CONNECTORS);
        expect(products[i].name.toLowerCase()).toContain(searchString);
        if (products[i + 1]) {
          expect(products[i + 1].name.localeCompare(products[i].name)).toEqual(
            1
          );
        }
      }
    });
  });

  it('getProductByCriteria with empty searchString', () => {
    const criteria: Criteria = {
      search: '',
      sort: null,
      type: null
    };
    service.getProductsByCriteria(criteria).subscribe((products) => {
      expect(products.length).toEqual(MOCK_PRODUCTS.length);
    });
  });

  it('getProductByCriteria with popularity order', () => {
    const criteria: Criteria = {
      search: '',
      sort: SortType.POPULARITY,
      type: null
    };
    service.getProductsByCriteria(criteria).subscribe((products) => {
      for (let i = 0; i < products.length; i++) {
        if (
          products[i].platformReview &&
          products[i + 1] &&
          products[i + 1].platformReview
        ) {
          expect(Number(products[i + 1].platformReview)).toBeGreaterThanOrEqual(
            Number(products[i].platformReview)
          );
        }
      }
    });
  });
});
