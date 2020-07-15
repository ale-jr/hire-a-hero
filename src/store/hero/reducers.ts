import { HeroState, HeroActionTypes } from './types'

const initialState: HeroState = {
  heroes: [],
  loading: false,
}

export const heroReducer = (
  state = initialState,
  action: HeroActionTypes,
): HeroState => {
  switch (action.type) {
    case 'SET_HEROES':
      return { ...state, heroes: action.heroes }
    case 'SET_HEROES_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_HEROES_ERROR':
      return { ...state, error: action.error }
    case 'SET_SELECTED_HERO':
      return { ...state, selectedHero: action.hero }
    default:
      return state
  }
}
