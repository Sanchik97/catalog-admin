import makeRequest from '@api/makeRequest'
import queryString from 'query-string'
import { history } from '@api/history'
import { idType } from '@app/interfaces'
import { ICategory } from '@app/interfaces/categories'

const url = '/api/categories'

class CategoriesService {
  getAll() {
    return makeRequest({
      url,
      params: queryString.parse(history.location.search),
    })
  }

  getAllCategoriesSelect() {
    return makeRequest({
      url: url + '/list',
    })
  }

  getById(id: idType) {
    return makeRequest({
      url: url + '/' + id,
    })
  }

  create(data: any) {
    return makeRequest({
      url: url,
      method: 'post',
      data,
    })
  }

  update(data: { id: idType; category: ICategory }) {
    return makeRequest({
      url: url + '/' + data.id,
      method: 'patch',
      data: data.category,
    })
  }

  delete(id: idType) {
    return makeRequest({
      url: url + '/' + id,
      method: 'delete',
    })
  }
}

export default new CategoriesService()
