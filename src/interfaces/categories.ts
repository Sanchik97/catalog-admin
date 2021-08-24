import { idType, IImage, IPageInformation, IPagination } from '@app/interfaces/index'

export interface ICategoryResponse extends IPagination {
  data: ICategoryList[]
}

export interface ICategoryList {
  created_at: string
  id: idType
  image: IImage
  image_id: idType
  page_id: idType
  title: string
  updated_at: string
}

export interface ICategoryIntl {
  id: idType
  category_id: idType
  locale: string
  title: string
  created_at: string
  updated_at: string
}

export interface ICategory extends ICategoryList {
  sliders: IImage[]
  i18n: ICategoryIntl[]
  page: IPageInformation
}
