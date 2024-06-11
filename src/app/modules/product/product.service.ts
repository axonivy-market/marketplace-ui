import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';
import { Criteria } from '../../shared/models/criteria.model';
import { Product } from '../../shared/models/product.model';
import { RequestParam } from '../../shared/enums/request-param';

const PRODUCT_REQUEST_PATH = 'api/product';
@Injectable()
export class ProductService {

  httpClient = inject(HttpClient);

  findProductsByCriteria(criteria: Criteria) {
    let requestURL = criteria.url;
    if (requestURL === '') {
      requestURL = `${PRODUCT_REQUEST_PATH}/${criteria.type}`;
    }
    let requestParams = new HttpParams()
      .set(RequestParam.SORT, `${criteria.sort}`)
      .set(RequestParam.KEYWORD, `${criteria.search}`);
    return this.httpClient.get(requestURL, { params: requestParams }).pipe(
      map((response: any) => {
        return {
          products: response._embedded.products,
          links: response._links,
          page: response.page
        };
      }),
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

  getProductById(productId: string): Observable<Product> {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (product) {
      return of(product);
    }
    return of({} as Product);
  }
}
