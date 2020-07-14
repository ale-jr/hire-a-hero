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
    default:
      return state
  }
}
