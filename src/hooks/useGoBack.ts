import { useHistory, useLocation } from 'react-router-dom'
import { LocationState } from '@app/interfaces'
import { privateRoutes } from '@app/routes'

export function useGoBack(pathname: string) {
  const { push } = useHistory()
  const location = useLocation<LocationState>()

  const goBack = () => {
    let { from } = location.state || { from: { pathname: privateRoutes[pathname].path } }
    push(from)
  }

  return { goBack }
}
