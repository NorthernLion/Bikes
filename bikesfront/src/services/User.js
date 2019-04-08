import { callController } from '../util/ApiConnection'

export const createUser = user => {
  const route = 'api/users'
  const prefix = 'CREATE_USER_'
  const method = 'post'
  return callController(route, prefix, user, method)
}

export default { createUser }