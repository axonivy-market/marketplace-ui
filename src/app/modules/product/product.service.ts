import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';
import { Criteria } from '../../shared/models/criteria.model';
import { Product } from '../../shared/models/product.model';
import { RequestParam } from '../../shared/enums/request-param';
import { ProductApiResponse } from '../../shared/models/apis/product-response.model';

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
    return this.httpClient.get<ProductApiResponse>(requestURL, { params: requestParams })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  // TODO MARP-358
  getProductById(productId: string): Observable<Product> {
    let products = MOCK_PRODUCTS._embedded.products as Product[];
    const product = products.find(p => p.id === productId);
    if (product) {
      return of(product);
    }
    return of({} as Product);
  }
}
