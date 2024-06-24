import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StarRatingCounting } from '../../../../../shared/models/star-rating-counting.model';
import { MOCK_STAR_RATING_COUNTING } from '../../../../../shared/mocks/mock-star-rating-counting';

@Injectable()
export class StarRatingCountingService {
  httpClient = inject(HttpClient);

  getAllRatingCommentCounting(productId: string): Observable<StarRatingCounting[]> {
    let requestURL = `api/product/${productId}/rating`;
    return this.httpClient.get<StarRatingCounting[]>(requestURL);
  }
}
