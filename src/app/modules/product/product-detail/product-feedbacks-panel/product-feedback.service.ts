import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeedbackApiResponse } from '../../../../shared/models/apis/feedback-response.model';
import { SkipLoading } from '../../../../core/interceptors/api.interceptor';
import { AuthService } from '../../../../auth/auth.service';
import { Feedback } from '../../../../shared/models/feedback.model';

const FEEDBACK_API_URL = 'api/feedback';
@Injectable()
export class ProductFeedbackService {
  http = inject(HttpClient);
  authService = inject(AuthService);

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );
    return this.http.post<Feedback>(FEEDBACK_API_URL, feedback, {
      headers,
      context: new HttpContext().set(SkipLoading, true)
    });
  }

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
    return this.http.get<FeedbackApiResponse>(requestURL, {
      params: requestParams,
      context: new HttpContext().set(SkipLoading, true)
    });
  }

  findProductFeedbackOfUser(
    productId: string
  ): Observable<Feedback> {
    let params = new HttpParams()
      .set('productId', productId)
      .set('userId', this.authService.getUserId()!);
    let requestURL = FEEDBACK_API_URL;
    return this.http.get<Feedback>(requestURL, {
      params,
      context: new HttpContext().set(SkipLoading, true)
    });
  }
}
