import axios from 'axios'

// This is the only function that uses axios in the whole project.
// The response axios gets from the api will be returned to handleRequest function.
function callApi(url, method, data, prefix, token) {
  const options = {
    headers: {
      Authorization: `bearer ${token}`
    }
  }
  switch (method) {
    case 'get':
      return axios.get(url, options)
    case 'post':
      return axios.post(url, data, options)
    case 'put':
      return axios.put(url, data, options)
    case 'delete':
      return axios.delete(url, options)
    default:
      return Promise.reject(new Error('Invalid http method'))
  }
}

// callController is called from the action creators to dispatch an ATTEMPT of getting data from the server. 
// It is the part of action creator that dispatches the action.
export const callController = (route, prefix, data, method = 'get') => (dispatch) => {
  const payload = {
    route,
    method,
    data,
    prefix
  }
  dispatch({ type: `${prefix}ATTEMPT`, payload })
}

// If you feel a sudden urge to call this. Don't. It is only exported in order to be used as a middleware.
// This is custom middleware that activates if action has payload and then calls callApi. 
// If there are errors action prefix_FAILURE will be dispatched.
// If Successfull action prefix_SUCCESS will be dispatched. 
// All errors and data can be found from action.response.
// It should only activate when callController is used to dispatch an action.
export const handleRequest = store => next => (action) => {
  next(action)
  const { payload } = action
  if (payload) {
    callApi(payload.route, payload.method, payload.data, payload.prefix, store.getState().user.token)
      .then((res) => {
        store.dispatch({ type: `${payload.prefix}SUCCESS`, response: res.data })
      })
      .catch(err => store.dispatch({ type: `${payload.prefix}FAILURE`, response: err }))
  }
}