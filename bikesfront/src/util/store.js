import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { handleRequest } from './ApiConnection'

import login from '../reducers/LoginReducer'
import loading from '../reducers/LoadingReducer'

const reducer = combineReducers({
  user: login,
  loading: loading
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, handleRequest)
  )
)

export default store