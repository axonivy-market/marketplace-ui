import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';
import { FilterType } from '../../shared/enums/filter-type.enum';
import { SortType } from '../../shared/enums/sort-type.enum';

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

  getProductByName(productName: string): Observable<Product[]> {
    if (productName === '') {
      return of(MOCK_PRODUCTS);
    }
    return of(
      MOCK_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(productName)
      )
    );
  }

  getProductByType(productType: string): Observable<Product[]> {
    console.log(productType)
    if (productType === '' || productType === FilterType.All_TYPES) {
      return of(MOCK_PRODUCTS);
    }
    return of(MOCK_PRODUCTS.filter((product) => product.type === productType));
  }

  getProductsWithSort(sortType: SortType) {
    const collator = new Intl.Collator('en');
    switch (sortType) {
      case SortType.POPULARITY:
        return of(
          (MOCK_PRODUCTS as Product[]).sort((a: Product, b: Product) =>
            collator.compare(a.platformReview, b.platformReview)
          )
        );
      case SortType.ALPHABETICALLY:
        return of(
          (MOCK_PRODUCTS as Product[]).sort((a: Product, b: Product) =>
            collator.compare(a.name, b.name)
          )
        );
      case SortType.RECENT:
        return of(MOCK_PRODUCTS);
      default:
        return of(MOCK_PRODUCTS);
    }
  }
}
