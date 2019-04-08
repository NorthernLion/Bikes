import { callController } from '../util/ApiConnection'

export const login = loginInformation => {
  const route = 'api/login'
  const prefix = 'LOGIN_'
  const method = 'post'
  return callController(route, prefix, loginInformation, method)
}

export default { login }