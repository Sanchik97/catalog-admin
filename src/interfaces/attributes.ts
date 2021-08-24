import { idType, IPagination } from '@app/interfaces/index'

export interface IAttributeResponse extends IPagination {
  data: IAttributeType[]
}

export interface IAttributeType {
  id: idType
  title: string
  i18n: IAttributeTypeIntl[]
  created_at: string
  updated_at: string
}

export interface IAttributeValue {
  attribute: IAttributeType
  attribute_id: idType
  created_at: string
  i18n: IAttributeValueIntl[]
  id: idType
  product_id: idType
  updated_at: string
  value: string
}

export interface IAttributeValueIntl {
  created_at: string
  id: idType
  locale: string
  product_attribute_id: idType
  updated_at: string
  value: string
}

export interface IAttributeTypeIntl {
  attribute_id: idType
  created_at: string
  id: idType
  locale: string
  title: string
  updated_at: string
}


export interface IPostAttribute {
  title_uz: string
  title_ru: string
}
