import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeedbackApiResponse } from '../../../../shared/models/apis/feedback-response.model';
import { SkipLoading } from '../../../../core/interceptors/api.interceptor';

const FEEDBACK_API_URL = 'api/feedback';
@Injectable()
export class ProductFeedbackService {

  httpClient = inject(HttpClient);

  findProductFeedbacksByCriteria(
    productId: string,
    page: number = 0,
    size: number = 6,
    sort: string = 'updatedAt,desc'
  ): Observable<FeedbackApiResponse> {
    let requestParams = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sort);

    let requestURL = `${FEEDBACK_API_URL}/product/${productId}`;
    return this.httpClient.get<FeedbackApiResponse>(requestURL, { params: requestParams, context: new HttpContext().set(SkipLoading, true) });
  }
}
