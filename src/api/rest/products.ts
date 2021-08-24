import makeRequest from '@api/makeRequest'
import * as queryString from 'query-string'
import { history } from '@api/history'
import { idType } from '@app/interfaces'

const url = 'api/products'

class ProductsService {
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

  create(data: any) {
    return makeRequest({
      url,
      method: 'post',
      data,
    })
  }

  update(data: { product: any; id: idType }) {
    return makeRequest({
      url: url + '/' + data.id,
      method: 'patch',
      data: data.product,
    })
  }

  delete(id: idType) {
    return makeRequest({
      url: url + '/' + id,
      method: 'delete',
    })
  }
}

export default new ProductsService()
