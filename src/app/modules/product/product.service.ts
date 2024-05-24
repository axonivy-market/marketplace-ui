import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';

@Injectable()
export class ProductService {
  httpClient = inject(HttpClient);

  getAllProducts(): Observable<Product[]> {
    return of(MOCK_PRODUCTS);
  }

  getProductById(productId: string): Observable<Product> {
    const product = MOCK_PRODUCTS.find((product) => product.id === productId);
    if (product) {
      return of(product);
    }
    return of({} as Product);
  }
}
