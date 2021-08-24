import { useQuery, UseQueryOptions } from 'react-query'
import { ClientsService } from '@app/api'
import { AxiosResponse } from 'axios'
import { idType } from '@app/interfaces'
import {IClientResponse} from "@app/interfaces/clients"

export const CLIENTS_KEY = 'clients_key'

export function useClients(options?: UseQueryOptions<IClientResponse, Error>) {
  return useQuery<IClientResponse, Error>(
    CLIENTS_KEY,
    () => ClientsService.getAll().then((response: AxiosResponse<IClientResponse>) => response.data),
    {
      ...options,
    },
  )
}

export function useClient(id: idType, options?: UseQueryOptions<any, Error>) {
  return useQuery(
    [CLIENTS_KEY, id],
    () => ClientsService.getById(id).then((response: AxiosResponse<any>) => response.data),
    {
      ...options,
    },
  )
}
