import { useQuery, UseQueryOptions } from 'react-query'
import { ISettings } from '@app/interfaces/settings'
import { SettingsService } from '@app/api'
import { AxiosResponse } from 'axios'

export const SETTINGS_KEY = 'settings_key'

export function useSettings(options?: UseQueryOptions<ISettings, Error>) {
  return useQuery<ISettings, Error>(
    SETTINGS_KEY,
    () => SettingsService.get().then((response: AxiosResponse<ISettings>) => response.data),
    {
      ...options,
    },
  )
}
