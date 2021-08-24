import { useQuery, UseQueryOptions } from 'react-query'
import { AttributesService } from '@app/api'
import { AxiosResponse } from 'axios'
import { IAttributeResponse, IAttributeType } from '@app/interfaces/attributes'

export const ATTRIBUTES_KEY = 'attributes_key'
export const ATTRIBUTES_SELECT_KEY = 'attributes_select_key'

export function useAttributes(options?: UseQueryOptions<IAttributeResponse, Error>) {
  return useQuery<IAttributeResponse, Error>(
    ATTRIBUTES_KEY,
    () =>
      AttributesService.getAll().then(
        (response: AxiosResponse<IAttributeResponse>) => response.data,
      ),
    {
      ...options,
    },
  )
}

export function useAttributesSelect(options?: UseQueryOptions<IAttributeType[], Error>) {
  return useQuery<IAttributeType[], Error>(
    ATTRIBUTES_SELECT_KEY,
    () =>
      AttributesService.getAllAttributesSelect().then(
        (response: AxiosResponse<IAttributeType[]>) => response.data,
      ),
    {
      ...options,
    },
  )
}
