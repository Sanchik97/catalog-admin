import { idType, IPagination } from '@app/interfaces/index'

export interface IReviewResponse extends IPagination {
  data: IReview[]
}

export interface IReview {
  active: number
  avatar: string
  created_at: string
  id: idType
  name: string
  phone: string
  text: string
  updated_at: string
}
