import { heroReducer } from './hero/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  hero: heroReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = composeWithDevTools({})
const middlewares = applyMiddleware(thunk)
const middlewaresWithDevTools = composeEnhancers(middlewares)

export const store = createStore(rootReducer, middlewaresWithDevTools)
