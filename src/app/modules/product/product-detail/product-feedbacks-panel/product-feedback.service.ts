import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
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

  submitFeedback(feedback: Feedback): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<any>(FEEDBACK_API_URL, feedback, { headers, context: new HttpContext().set(SkipLoading, true) });
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
    return this.http.get<FeedbackApiResponse>(requestURL, { params: requestParams, context: new HttpContext().set(SkipLoading, true) });
  }
}
