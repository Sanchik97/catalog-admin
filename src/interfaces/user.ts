export interface ILoginData {
	email: string
	password: string
}

export interface ILoginResponse {
	access_token: string
	expires_in: number
	token_type: string
}
