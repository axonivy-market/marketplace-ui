import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom, of } from 'rxjs';
import { FilterType } from '../../shared/enums/filter-type.enum';
import { SortType } from '../../shared/enums/sort-type.enum';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';
import { Criteria } from '../../shared/models/criteria.model';
import { Product } from '../../shared/models/product.model';
import { apiInterceptor } from '../../core/interceptors/api.interceptor';

@Injectable()
export class ProductService {
  httpClient = inject(HttpClient);

  getProductById(productId: string): Observable<Product> {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (product) {
      return of(product);
    }
    return of({} as Product);
  }

  getProductsByCriteria(criteria: Criteria): Observable<Product[]> {
    let products = MOCK_PRODUCTS;
    products = this.getProductByNameOrDescription(products, criteria.search);

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
      default:
        return products;
    }
  }

  sendRequestToProductDetailVersionAPI(
    prductId: string,
    showDevVersion: boolean,
    designerVersion: string
  ) {
    const params = new HttpParams()
      .append('designerVersion', designerVersion)
      .append('showDevVersion', showDevVersion);

    const headers = new HttpHeaders();
    let apiInterceptorHeader = inject(apiInterceptor);
    apiInterceptorHeader.addIvyHeaders(headers);
    let url = prductId + '/versions';
    firstValueFrom(
      this.httpClient.get(url, { headers: headers, params: params })
    )
      .then((response: any) => {
        return response;
      })
      .catch()
      .finally();
  }
}
