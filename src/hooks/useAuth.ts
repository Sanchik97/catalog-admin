import {AUTH_TOKEN} from "@app/constants/auth"

export function useAuth() {
	return !!localStorage.getItem(AUTH_TOKEN)
}
