import { colonReplace } from './stringUtils'
import i18n from 'i18next'
export interface FetchError {
  message: string
  error?: Error
}

type FetchOptions = {
  url: string
  urlParams?: Record<string, string | number>
}
/** This function uses fetch, so only network errors wiil throw exceptions */
export const fetchApi = ({ url, urlParams }: FetchOptions): Promise<any> =>
  new Promise((resolve, reject) => {
    const fetchUrl = urlParams ? colonReplace(url, urlParams) : url
    fetch(fetchUrl)
      .then((response) => response.json())
      .then(resolve)
      .catch((error) => reject({ message: i18n.t('errors.fetch'), error }))
  })

export const HERO_API_RESPONSE_SUCCESS = 'success'
export const HERO_API_RESPONSE_ERROR = 'error'
/** This isn't the best way to get a error response, but this is the only way because HeroAPI always return 200 */
export const HERO_API_ERROR_BAD_REQUEST = 'bad name search request'
/** This isn't the best way to get a error response, but this is the only way because HeroAPI always return 200 */
export const HERO_API_ERROR_NO_RESULTS = 'character with given name not found'
