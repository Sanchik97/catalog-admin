import { useQuery, UseQueryOptions } from 'react-query'
import { ReviewsService } from '@app/api'
import { AxiosResponse } from 'axios'
import { idType } from '@app/interfaces'
import { IReview, IReviewResponse } from '@app/interfaces/reviews'

export const REVIEWS_KEY = 'reviews_key'

export function useReviews(options?: UseQueryOptions<IReviewResponse, Error>) {
  return useQuery<IReviewResponse, Error>(
    REVIEWS_KEY,
    () => ReviewsService.getAll().then((response: AxiosResponse<IReviewResponse>) => response.data),
    {
      ...options,
    },
  )
}

export function useReview(id: idType, options?: UseQueryOptions<IReview, Error>) {
  return useQuery<IReview, Error>(
    [REVIEWS_KEY, id],
    () => ReviewsService.getById(id).then((response: AxiosResponse<IReview>) => response.data),
    {
      ...options,
    },
  )
}
