import makeRequest from "@api/makeRequest"
import {ILoginData} from "@app/interfaces/user"


const url = '/api/auth'

class AuthService {
	login(data: ILoginData) {
		return makeRequest({
			url: url + '/login',
			method: 'post',
			data
		})
	}

	me() {
		return makeRequest({
			url: url + '/user-profile',
		})
	}

	logout() {
		return makeRequest({
			url: url + '/logout',
			method: 'post'
		})
	}
}

export default new AuthService()
