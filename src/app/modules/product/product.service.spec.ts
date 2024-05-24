import { TestBed } from '@angular/core/testing';

import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const PRODUCT_ID = 'adobe-acrobat-connector';
const NOT_EXIST_ID = 'undefined';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ProductService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
      expect(data).toEqual({} as any);
    });
  });
});
