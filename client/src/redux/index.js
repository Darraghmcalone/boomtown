import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'

// @TODO: Import your reducers
import newItemReducer from '.modules/redux'
const middleware = []

const store = createStore(
  combineReducers({newItem: newItemReducer}),
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
