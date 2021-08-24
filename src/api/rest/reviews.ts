import makeRequest from '@api/makeRequest'
import queryString from 'query-string'
import { history } from '@api/history'
import { idType } from '@app/interfaces'

const url = '/api/reviews'

class ReviewsService {
  getAll() {
    return makeRequest({
      url,
      params: queryString.parse(history.location.search),
    })
  }

  getById(id: idType) {
    return makeRequest({
      url: url + '/' + id,
    })
  }

  update(data: { id: idType; status: number }) {
    return makeRequest({
      url: url + '/' + data.id,
      method: 'patch',
      data: {
        active: data.status,
      },
    })
  }

  delete(id: idType) {
    return makeRequest({
      url: url + '/' + id,
      method: 'delete',
    })
  }
}

export default new ReviewsService()
