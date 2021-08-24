import { idType, IImage, IIntl, IPageInformation, IPagination } from '@app/interfaces/index'
import { ICategory } from '@app/interfaces/categories'
import { IAttributeValue } from '@app/interfaces/attributes'

export interface IProductsResponse extends IPagination {
  data: IProductList[]
}

export interface IProductList {
  category: ICategory
  category_id: idType
  created_at: string
  i18n: IIntl[]
  id: idType
  image: IImage
  image_id: idType
  page_id: idType
  price: number
  title: string
  updated_at: string
}

export interface IProduct extends IProductList {
  attributes: IAttributeValue[]
  page: IPageInformation
  sliders: IImage[]
}
