import { StarRatingCounting } from '../models/star-rating-counting.model';

export const MOCK_STAR_RATING_COUNTING = [
    {
        starRating: 1,
        commentNumber: 0,
        percent: 0
    },
    {
        starRating: 2,
        commentNumber: 2,
        percent: 4
    },
    {
        starRating: 3,
        commentNumber: 4,
        percent: 8
    },
    {
        starRating: 4,
        commentNumber: 14,
        percent: 28
    },
    {
        starRating: 5,
        commentNumber: 30,
        percent: 60
    }
] as unknown as StarRatingCounting[];
