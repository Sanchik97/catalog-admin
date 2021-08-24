import makeRequest from '@api/makeRequest'
import * as queryString from 'query-string'
import { history } from '@api/history'
import { idType } from '@app/interfaces'
import { IClient } from '@app/interfaces/clients'

const url = '/api/clients'

class ClientsService {
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

  update(client: IClient) {
    return makeRequest({
      url: url + '/' + client.id,
      method: 'patch',
      data: client,
    })
  }

  delete(id: idType) {
    return makeRequest({
      url: url + '/' + id,
      method: 'delete',
    })
  }
}

export default new ClientsService()
