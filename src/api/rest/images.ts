import makeRequest from '@api/makeRequest'
import { idType } from '@app/interfaces'

const url = '/api/images'

class ImagesService {
  getAll() {
    return makeRequest({
      url,
    })
  }

  getById(id: idType) {
    return makeRequest({
      url: url + '/' + id,
    })
  }

  create(data: FormData) {
    return makeRequest({
      url: url,
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data
    })
  }

  delete(id: idType) {
    return makeRequest({
      url: url + '/' + id,
      method: 'delete',
    })
  }
}

export default new ImagesService()
