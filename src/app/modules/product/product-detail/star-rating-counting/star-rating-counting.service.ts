import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StarRatingCounting } from '../../../../shared/models/star-rating-counting.model';
import { MOCK_STAR_RATING_COUNTING } from '../../../../shared/mocks/mock-star-rating-counting';

@Injectable()
export class StarRatingCountingService {
  httpClient = inject(HttpClient);

  getAllRatingCommentCountings(): Observable<StarRatingCounting[]> {
    return of(MOCK_STAR_RATING_COUNTING);
  }
}
