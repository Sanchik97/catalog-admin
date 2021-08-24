import { useQuery, UseQueryOptions } from 'react-query'
import { ProductsService } from '@app/api'
import { AxiosResponse } from 'axios'
import { idType } from '@app/interfaces'
import {IProduct, IProductsResponse} from "@app/interfaces/products"

export const PRODUCTS_KEY = 'products_key'

export function useProducts(options?: UseQueryOptions<IProductsResponse, Error>) {
  return useQuery<IProductsResponse, Error>(
    PRODUCTS_KEY,
    () => ProductsService.getAll().then((response: AxiosResponse<IProductsResponse>) => response.data),
    {
      ...options,
    },
  )
}

export function useProduct(id: idType, options?: UseQueryOptions<IProduct, Error>) {
  return useQuery<IProduct, Error>(
    [PRODUCTS_KEY, id],
    () => ProductsService.getById(id).then((response: AxiosResponse<IProduct>) => response.data),
    {
      ...options,
    },
  )
}
