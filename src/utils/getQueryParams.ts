import { history } from '@api/history'

export function getQueryParams(key: string) {
	const queries = new URLSearchParams(history.location.search)
	const params = Object.fromEntries(queries.entries())

	return params[key]
}
