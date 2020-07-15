import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../store/store'

export type ReduxThunkDispatch = ThunkDispatch<RootState, any, Action>
export const useThunkDispatch = (): ReduxThunkDispatch =>
  useDispatch<ReduxThunkDispatch>()
