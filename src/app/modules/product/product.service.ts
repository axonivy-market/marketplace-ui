import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from '../../shared/mocks/mock-data';
import { Criteria } from '../../shared/models/criteria.model';
import { Product } from '../../shared/models/product.model';
import { VersionData } from '../../shared/models/vesion-artifact.model';
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

  getReadmeFile(productId: string, tag: string): Observable<Readme> {
    return this.httpClient.get<Readme>(
      `api/product-details/${productId}?tag=${tag}`
    );
  }

  sendRequestToProductDetailVersionAPI(
    productId: string,
    showDevVersion: boolean,
    designerVersion: string
  ) {
    const params = new HttpParams()
      .append('designerVersion', designerVersion)
      .append('showDevVersion', showDevVersion);

    const headers = new HttpHeaders();
    let url = 'api/product-details/' + productId + '/versions';
    return firstValueFrom(
      this.httpClient.get(url, { headers: headers, params: params })
    )
      .then((response: any) => {
        return response;
      })
      .catch()
      .finally();
  }

  sendRequestToProductDetailVersionAPITest(
    productId: string,
    showDevVersion: boolean,
    designerVersion: string
  ): Observable<VersionData> {
    let url = 'api/product-details/' + productId + '/versions';
    const params = new HttpParams()
      .append('designerVersion', designerVersion)
      .append('showDevVersion', showDevVersion);
    return this.httpClient.get<VersionData>(url, { params: params });
  }
}
