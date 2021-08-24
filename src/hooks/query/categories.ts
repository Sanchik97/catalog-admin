import { useQuery, UseQueryOptions } from 'react-query'
import { CategoriesService } from '@app/api'
import { AxiosResponse } from 'axios'
import { idType } from '@app/interfaces'
import { ICategory, ICategoryList, ICategoryResponse } from '@app/interfaces/categories'

export const CATEGORIES_KEY = 'categories_key'
export const CATEGORIES_SELECT_KEY = 'categories_select_key'

export function useCategories(options?: UseQueryOptions<ICategoryResponse, Error>) {
  return useQuery<ICategoryResponse, Error>(
    CATEGORIES_KEY,
    () =>
      CategoriesService.getAll().then(
        (response: AxiosResponse<ICategoryResponse>) => response.data,
      ),
    {
      ...options,
    },
  )
}

export function useCategory(id: idType, options?: UseQueryOptions<ICategory, Error>) {
  return useQuery<ICategory, Error>(
    [CATEGORIES_KEY, id],
    () => CategoriesService.getById(id).then((response: AxiosResponse<ICategory>) => response.data),
    {
      ...options,
    },
  )
}

export function useCategoriesSelect(options?: UseQueryOptions<ICategoryList[], Error>) {
  return useQuery<ICategoryList[], Error>(
    CATEGORIES_SELECT_KEY,
    () =>
      CategoriesService.getAllCategoriesSelect().then(
        (response: AxiosResponse<ICategoryList[]>) => response.data,
      ),
    {
      ...options,
    },
  )
}
