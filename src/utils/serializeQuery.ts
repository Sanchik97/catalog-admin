import queryString from 'query-string'
import { history } from '@api/history'
import { queryKeys } from '@app/constants/query-keys'

export const serializeQuery = (query: string, value: any) => {
  const qs = queryString.parse(history.location.search)

  qs[query] = value

  if (query !== queryKeys.PAGE) delete qs['page']

  const newSearch = Object.keys(qs)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(qs[k] as string)}`)
    .join('&')

  return `?${new URLSearchParams(newSearch)}`
}
