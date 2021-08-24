export type idType = string | number

export interface IRoute {
  [key: string]: {
    path: string
    component: React.FunctionComponent
  }
}

export interface LocationState {
  from: {
    pathname: string
  }
}

export interface IPagination {
  current_page: number
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: any[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

export interface IImage {
  created_at: string
  filename: string
  full_path: string
  id: idType
  link: string
  path: string
  updated_at: string
}

export interface IIntl {
  content: string
  created_at: string
  description: string
  id: idType
  keywords: string
  locale: string
  page_id: idType
  slug: string
  title: string
}

export interface IPageInformation {
  content: string
  created_at: string
  description: string
  i18n: IIntl[]
  id: idType
  keywords: string
  slug: string
  title: string
  updated_at: string
}
