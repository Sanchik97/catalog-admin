import axios from 'axios'
import {AUTH_TOKEN} from "@app/constants/auth"


const makeRequest = axios.create({
	baseURL: process.env.REACT_APP_API_URL
})

makeRequest.interceptors.request.use(
	async (config) => {

		config.headers = {
			Accept: 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem(AUTH_TOKEN),
			'Content-Type': 'application/json',
		}

		return config
	},
	function (error) {
		return Promise.reject(error)
	},
)

makeRequest.interceptors.response.use(
	async (response) => {
		return response
	},
	(error) => {
		if (error.response.status === 401 && window.location.pathname !== '/auth') {
			localStorage.removeItem(AUTH_TOKEN)
			window.location.href = '/auth'
		}
		return Promise.reject(error)
	},
)

export default makeRequest
