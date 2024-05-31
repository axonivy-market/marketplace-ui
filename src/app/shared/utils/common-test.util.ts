import { of } from 'rxjs';
import { Product } from '../models/product.model';
import { Criteria } from '../models/criteria.model';

export const MOCK_PRODUCT = {
  id: 'portal',
  name: 'product name',
  description: 'product description'
} as Product;

export class MockProductService {
  getAllProducts() {
    return of([MOCK_PRODUCT]);
  }

  getProductById() {
    return of(MOCK_PRODUCT);
  }

  getProductsByCriteria(criteria: Criteria) {
    return of(MOCK_PRODUCT);
  }
}
