import {
  SetSelectedHeroAction,
  SetHeroesAction,
  SetHeroesErrorAction,
  SetHeroesLoadingAction,
  SET_HEROES,
  SET_HEROES_ERROR,
  SET_HEROES_LOADING,
  SET_SELECTED_HERO,
  HeroPowers,
} from './types'
import { Action } from 'redux'
import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'

export const fetchHeroesByName = (
  name: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  store,
) => {}
