import { of } from 'rxjs';
import { Product } from '../models/product.model';
import { Criteria } from '../models/criteria.model';
import { SortType } from '../enums/sort-type.enum';
import { FilterType } from '../enums/filter-type.enum';
import { MOCK_PRODUCTS } from './mock-data';

export class MockProductService {
  getProductById(id: string) {
    return of(MOCK_PRODUCTS.find(product => product.id === id));
  }

  getProductsByCriteria(criteria: Criteria) {
    let products = MOCK_PRODUCTS;
    if (criteria.search) {
      products = this.getProductByNameOrDescription(products, criteria.search);
    }

    if (criteria.type) {
      products = this.getProductByType(products, criteria.type);
    }

    if (criteria.sort) {
      products = this.getProductsWithSort(products, criteria.sort);
    }

    return of(products);
  }

  private getProductByNameOrDescription(
    products: Product[],
    searchText: string
  ): Product[] {
    if (searchText === '') {
      return products;
    }

    return products.filter(
      product =>
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLocaleLowerCase().includes(searchText)
    );
  }

  private getProductByType(
    products: Product[],
    productType: string
  ): Product[] {
    if (productType === '' || productType === FilterType.All_TYPES) {
      return products;
    }
    return products.filter(product => product.type === productType);
  }

  private getProductsWithSort(products: Product[], sortType: SortType) {
    const collator = new Intl.Collator('en');
    switch (sortType) {
      case SortType.POPULARITY:
        return products.sort((a: Product, b: Product) =>
          collator.compare(a.platformReview, b.platformReview)
        );
      case SortType.ALPHABETICALLY:
        return products.sort((a: Product, b: Product) =>
          collator.compare(a.name, b.name)
        );
      case SortType.RECENT:
        return products;
      default:
        return products;
    }
  }
}
