import { heroReducer } from './hero/reducers'
import { combineReducers, createStore, applyMiddleware, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'

const rootReducer = combineReducers({
  hero: heroReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type ReduxThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>

const composeEnhancers = composeWithDevTools({})
const middlewares = applyMiddleware(thunk)
const middlewaresWithDevTools = composeEnhancers(middlewares)

export const store = createStore(rootReducer, middlewaresWithDevTools)
