import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { handleRequest } from './ApiConnection'
// import corporationReducer from '../containers/corporation/services/corporationReducer'


const reducer = combineReducers({
  //corporations: corporationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, handleRequest)
  )
)

export default store