import makeRequest from '@api/makeRequest'
import queryString from 'query-string'
import { history } from '@api/history'
import { idType } from '@app/interfaces'
import {IPostAttribute} from "@app/interfaces/attributes"

const url = '/api/attributes'

class AttributesService {
  getAll() {
    return makeRequest({
      url,
      params: queryString.parse(history.location.search),
    })
  }

  getAllAttributesSelect() {
    return makeRequest({
      url: url + '/list'
    })
  }

  create(data: IPostAttribute) {
    return makeRequest({
      url,
      method: 'post',
      data,
    })
  }

  update(data: { attribute: IPostAttribute, id: idType }) {
    return makeRequest({
      url: url + '/' + data.id,
      method: 'patch',
      data: data.attribute,
    })
  }

  delete(id: idType) {
    return makeRequest({
      url: url + '/' + id,
      method: 'delete',
    })
  }
}

export default new AttributesService()
