import { of } from 'rxjs';
import { Product } from '../models/product.model';
import { Criteria } from '../models/criteria.model';
import { FilterType } from '../enums/filter-type.enum';
import { MOCK_PRODUCTS, MOCK_PRODUCTS_FILTER_CONNECTOR } from './mock-data';

const products = MOCK_PRODUCTS._embedded.products as Product[];
export class MockProductService {

  getProductById(id: string) {
    return of(products.find(product => product.id === id));
  }

  findProductsByCriteria(criteria: Criteria) {
    let products = MOCK_PRODUCTS._embedded.products;
    if (criteria.type == FilterType.CONNECTORS) {
      products = MOCK_PRODUCTS_FILTER_CONNECTOR._embedded.products;
    }
    return of({
      products: products,
      links: MOCK_PRODUCTS._links,
      page: MOCK_PRODUCTS.page
    });
  }
}
