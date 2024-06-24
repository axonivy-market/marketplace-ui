import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';
import { Criteria } from '../../shared/models/criteria.model';
import { Product } from '../../shared/models/product.model';
import { RequestParam } from '../../shared/enums/request-param';
import { ProductApiResponse } from '../../shared/models/apis/product-response.model';
import { SkipLoading } from '../../core/interceptors/api.interceptor';

const PRODUCT_API_URL = 'api/product';
@Injectable()
export class ProductService {

  httpClient = inject(HttpClient);

  findProductsByCriteria(criteria: Criteria): Observable<ProductApiResponse> {
    let requestParams = new HttpParams();
    let requestURL = PRODUCT_API_URL;
    if (criteria.nextPageHref) {
      requestURL = criteria.nextPageHref;
    } else {
      requestParams = requestParams
        .set(RequestParam.TYPE, `${criteria.type}`)
        .set(RequestParam.SORT, `${criteria.sort}`)
        .set(RequestParam.KEYWORD, `${criteria.search}`);
    }
    return this.httpClient.get<ProductApiResponse>(requestURL, { params: requestParams, context: new HttpContext().set(SkipLoading, true) });
  }

  getProductById(productId: string): Observable<Product> {
    const products = MOCK_PRODUCTS._embedded.products;
    const product = products.find(p => p.id === productId);
    if (product) {
      return of(product);
    }
    return of({} as Product);
  }
}
