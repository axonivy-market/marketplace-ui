import { of } from 'rxjs';
import { Product } from '../models/product.model';

export const MOCK_PRODUCT = {
  id: 'adobe-acrobat-connector',
  name: 'product name',
  description: 'product description',
} as Product;

export class MockProductService {
  getAllProducts() {
    return of([MOCK_PRODUCT]);
  }

  getProductById() {
    return of(MOCK_PRODUCT);
  }
}
