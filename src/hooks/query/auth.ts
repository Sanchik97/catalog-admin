import {useQuery, UseQueryOptions} from "react-query"
import {AuthService} from "@app/api"
import {AxiosResponse} from "axios"

export const AUTH_KEY = 'auth_key'

export function useAuthUserInformation(options?: UseQueryOptions<any, Error>) {
	return useQuery<any, Error>(AUTH_KEY, () => AuthService.me().then((response: AxiosResponse<any>) => response.data), {
		refetchOnMount: false,
		...options
	})
}
