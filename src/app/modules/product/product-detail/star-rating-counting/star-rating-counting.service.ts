import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StarRatingCounting } from '../../../../shared/models/star-rating-counting.model';
import { SkipLoading } from '../../../../core/interceptors/api.interceptor';

@Injectable()
export class StarRatingCountingService {
  httpClient = inject(HttpClient);

  getAllRatingCommentCounting(productId: string): Observable<StarRatingCounting[]> {
    let requestURL = `api/product/${productId}/rating`;
    return this.httpClient.get<StarRatingCounting[]>(requestURL, {context: new HttpContext().set(SkipLoading, true) });
  }
}
