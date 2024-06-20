import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feedback } from '../../../shared/models/feedback.model';
import { MOCK_FEEDBACKS } from '../../../shared/mocks/mock-data';

@Injectable()
export class ProductFeedbackService {

  httpClient = inject(HttpClient);

  getAllProductFeedbacks(productId: string): Observable<Feedback[]> {
    // const headers = new HttpHeaders()
    // .set('Content-Type', 'application/json')
    // .set('x-requested-by', 'ivy');
    // return this.httpClient.get<Feedback[]>(`http://localhost:8080/api/feedback/product/${productId}`, {headers});
    return of(MOCK_FEEDBACKS);
  }
}
