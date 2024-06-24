import { TestBed } from '@angular/core/testing';

import {
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TypeOption } from '../../shared/enums/type-option.enum';
import { SortOption } from '../../shared/enums/sort-option.enum';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';
import { Criteria } from '../../shared/models/criteria.model';
import { ProductService } from './product.service';
import { Product } from '../../shared/models/product.model';
import { catchError } from 'rxjs';

const PRODUCT_ID = 'amazon-comprehend';
const PRODUCT_TYPE = 'util';
const NOT_EXIST_ID = 'undefined';

describe('ProductService', () => {
  let products = MOCK_PRODUCTS._embedded.products as Product[];
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

  it('getProductById should return a product', () => {
    service.getProductDetails(PRODUCT_ID, PRODUCT_TYPE).subscribe(data => {
      expect(data.id).toEqual(PRODUCT_ID);
    });
  });

  it('getProductById should return null product', () => {
    service.getProductDetails(NOT_EXIST_ID, NOT_EXIST_ID).subscribe(data => {
      expect(data).toEqual({} as Product);
    });
  });

  it('findProductsByCriteria with should return products properly', () => {
    const searchString = 'Amazon Comprehend';
    const criteria: Criteria = {
      search: searchString,
      sort: SortOption.ALPHABETICALLY,
      type: TypeOption.CONNECTORS
    };
    service.findProductsByCriteria(criteria).subscribe(response => {
      let products = response._embedded.products;
      for (let i = 0; i < products.length; i++) {
        expect(products[i].type).toEqual(TypeOption.CONNECTORS);
        expect(products[i].name.toLowerCase()).toContain(searchString);
        if (products[i + 1]) {
          expect(products[i + 1].name.localeCompare(products[i].name)).toEqual(
            1
          );
        }
      }
    });
  });

  it('findProductsByCriteria with empty searchString', () => {
    const criteria: Criteria = {
      search: '',
      sort: null,
      type: null
    };
    service.findProductsByCriteria(criteria).subscribe(response => {
      expect(response._embedded.products.length).toEqual(products.length);
    });
  });

  it('findProductsByCriteria with popularity order', () => {
    const criteria: Criteria = {
      search: '',
      sort: SortOption.POPULARITY,
      type: null
    };
    service.findProductsByCriteria(criteria).subscribe(response => {
      let products = response._embedded.products;
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

  it('findProductsByCriteria with default sort', () => {
    const criteria: Criteria = {
      search: '',
      sort: SortOption.RECENT,
      type: null
    };
    service.findProductsByCriteria(criteria).subscribe(response => {
      expect(response._embedded.products.length).toEqual(products.length);
    });
  });

  it('findProductsByCriteria by next page url', () => {
    const criteria: Criteria = {
      nextPageHref: 'http://localhost:8080/marketplace-service/api/product?type=all&page=1&size=20',
      search: '',
      sort: SortOption.RECENT,
      type: TypeOption.All_TYPES
    };
    service.findProductsByCriteria(criteria).subscribe(response => {
      expect(response._embedded.products.length).toEqual(0);
      expect(response.page.number).toEqual(1);
    });
  });
});
