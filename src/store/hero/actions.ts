import {
  SetSelectedHeroAction,
  SetHeroesAction,
  SetHeroesErrorAction,
  SetHeroesLoadingAction,
  SET_HEROES,
  SET_HEROES_ERROR,
  SET_HEROES_LOADING,
  SET_SELECTED_HERO,
  Hero,
  HeroPowers,
} from './types'
import { FetchError } from '../../utils/fetchApi'
import { ReduxThunkAction } from '../store'

export const showHeroModal = (hero: Hero): SetSelectedHeroAction => ({
  type: SET_SELECTED_HERO,
  hero,
})

export const hideHeroModal = (): SetSelectedHeroAction => ({
  type: SET_SELECTED_HERO,
})

export const setHeroes = (heroes: Hero[]): SetHeroesAction => ({
  type: SET_HEROES,
  heroes,
})

export const setHeroError = (error: FetchError): SetHeroesErrorAction => ({
  type: SET_HEROES_ERROR,
  error,
})

export const setHeroLoading = (loading: boolean): SetHeroesLoadingAction => ({
  type: SET_HEROES_LOADING,
  loading,
})

export const sortHeroesByPower = (power: HeroPowers): ReduxThunkAction => (
  dispatch,
  state,
) => {
  const heroesToBeSorted = [...state().hero.heroes]
  heroesToBeSorted.sort((heroA, heroB) => {
    const heroAPower = +heroA.powerstats[power]
    const heroBPower = +heroB.powerstats[power]
    if (heroAPower > heroBPower) return -1
    if (heroAPower < heroBPower) return 1
    else return 0
  })
  dispatch(setHeroes(heroesToBeSorted))
}
