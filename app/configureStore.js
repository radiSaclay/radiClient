import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const middleware = applyMiddleware(logger(), thunkMiddleware)

export default function configureStore() {
	return createStore(rootReducer, middleware)
}
