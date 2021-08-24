import makeRequest from '@api/makeRequest'
import { ISettingsFields } from '@app/interfaces/settings'

const url = '/api/settings'

class SettingsService {
	get() {
		return makeRequest({
			url
		})
	}

	update(data: ISettingsFields) {
		return makeRequest({
			url,
			method: 'post',
			data: {
				fields: data
			}
		})
	}
}

export default new SettingsService()
