import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Criteria } from '../../shared/models/criteria.model';
import { RequestParam } from '../../shared/enums/request-param';
import { ProductApiResponse } from '../../shared/models/apis/product-response.model';
import { ProductDetail } from '../../shared/models/product-detail.model';
import { Readme } from '../../shared/models/readme.model';

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
    return this.httpClient.get<ProductApiResponse>(requestURL, {
      params: requestParams
    });
  }

  getProductDetails(
    productId: string,
    productType: string
  ): Observable<ProductDetail> {
    return this.httpClient.get<ProductDetail>(
      `api/product-details/${productId}?type=${productType}`
    );
  }

  getReadmeAndProductContentsFromTag(
    productId: string,
    tag: string
  ): Observable<Readme> {
    return this.httpClient.get<Readme>(
      `api/product-details/${productId}/readme?tag=${tag}`
    );
  }
}
