import {
  hideHeroModal,
  setHeroError,
  setHeroLoading,
  setHeroes,
  showHeroModal,
} from './actions'
import i18n from 'i18next'
import {
  fetchApi,
  HERO_API_ERROR_BAD_REQUEST,
  HERO_API_ERROR_NO_RESULTS,
  HERO_API_RESPONSE_SUCCESS,
} from '../../utils/fetchApi'
import { HERO_API_SEARCH_ENDPOINT } from '../../common/constants'
import { HERO_API_ACCESS_TOKEN } from '../../common/env'
import { Hero } from './types'
import { ReduxThunkAction } from '../store'

export const fetchHeroesByName = (name: string): ReduxThunkAction => async (
  dispatch,
) => {
  dispatch(setHeroes([]))
  dispatch(setHeroLoading(true))
  fetchApi({
    url: HERO_API_SEARCH_ENDPOINT,
    urlParams: {
      accessToken: HERO_API_ACCESS_TOKEN,
      name,
    },
  })
    .then(({ response, results, error }) => {
      console.log('then', response, results, error)
      if (error === HERO_API_ERROR_BAD_REQUEST) {
        dispatch(
          setHeroError({
            message: i18n.t('errors.missingName'),
          }),
        )
      } else if (error === HERO_API_ERROR_NO_RESULTS || !results) {
        dispatch(
          setHeroError({
            message: i18n.t('errors.noHeroes'),
          }),
        )
      } else if (response !== HERO_API_RESPONSE_SUCCESS) {
        dispatch(
          setHeroError({
            message: i18n.t('errors.unknown'),
          }),
        )
      } else {
        dispatch(setHeroes(results as Hero[]))
      }
    })
    .catch((error) => dispatch(setHeroError(error)))
    .finally(() => {
      dispatch(setHeroLoading(false))
    })
}
