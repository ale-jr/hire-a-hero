import { FetchError } from '../../utils/fetchApi'
export const SET_HEROES = 'SET_HEROES'
export const SET_HEROES_LOADING = 'SET_HEROES_LOADING'
export const SET_HEROES_ERROR = 'SET_HEROES_ERROR'
export const SET_SELECTED_HERO = 'SET_SELECTED_HERO'

export interface SetHeroesAction {
  type: typeof SET_HEROES
  heroes: Hero[]
}

export interface SetHeroesLoadingAction {
  type: typeof SET_HEROES_LOADING
  loading: boolean
}

export interface SetHeroesErrorAction {
  type: typeof SET_HEROES_ERROR
  error: FetchError
}

export interface SetSelectedHeroAction {
  type: typeof SET_SELECTED_HERO
  hero?: Hero
}

export type HeroActionTypes =
  | SetHeroesAction
  | SetHeroesLoadingAction
  | SetHeroesErrorAction
  | SetSelectedHeroAction

export interface Hero {
  id: string
  name: string
  powerstats: {
    intelligence: string
    strength: string
    speed: string
    durability: string
    power: string
    combat: string
  }
  biography: {
    'full-name': string
    'alter-egos': string
    aliases: string[]
    'place-of-birth': string
    'first-appearance': string
    publisher: string
    alignment: 'good' | 'bad'
  }
  appearance: {
    gender: string
    race: string
    /** first item of array is the height in feet and the second is in centimeters(with cm appended to the string) */
    height: string[]
    /** first item or array is the weight in pounds and the second is in kilograms */
    weight: string[]
    'eye-color': string
    'hair-color': string
  }
  work: {
    occupation: string
    base: string
  }
  connections: {
    'group-affiliation': string
    relatives: string
  }
  image: {
    url: string
  }
}
export type HeroPowers = keyof Hero['powerstats']

export interface HeroState {
  heroes: Hero[]
  loading: boolean
  error?: FetchError
  selectedHero?: Hero
}
