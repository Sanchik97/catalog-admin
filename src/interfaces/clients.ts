import {idType, IPagination} from '@app/interfaces/index'

export interface IClientResponse extends IPagination {
  data: IClient[]
}

export interface IClient {
  created_at: string
  id: idType
  name: string
  phone: string
  status: 'new' | 'viewed'
  updated_at: string
}
