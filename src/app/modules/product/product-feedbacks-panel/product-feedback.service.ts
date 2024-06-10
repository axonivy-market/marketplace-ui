import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feedback } from '../../../shared/models/feedback.model';
import { MOCK_FEEDBACKS } from '../../../shared/mocks/mock-data';

@Injectable()
export class ProductFeedbackService {

  httpClient = inject(HttpClient);

  getAllProductFeedbacks(productId: string): Observable<Feedback[]> {
    return of(MOCK_FEEDBACKS);
  }
}
