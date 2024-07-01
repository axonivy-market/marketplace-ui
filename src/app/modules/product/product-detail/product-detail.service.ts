import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { SkipLoading } from '../../../core/interceptors/api.interceptor';

const PRODUCT_DETAIL_API_URL = 'api/product-details';
@Injectable()
export class ProductDetailService {

  httpClient = inject(HttpClient);

  getProductDetailById(id: string): Observable<Product> {
    const requestURL = `${PRODUCT_DETAIL_API_URL}/${id}`;
    return this.httpClient.get<Product>(requestURL);
  }
}
