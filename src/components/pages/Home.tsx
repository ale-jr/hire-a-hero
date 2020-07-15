import React from 'react'
import PageWithSearchHeaderTemplate from '../templates/PageWithSearchHeroesHeader'
import Typography from '../atoms/Typography'
import { useTranslation } from 'react-i18next'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import ApiError from '../molecules/ApiError'
import Welcome from '../molecules/WelcomeMessage'
import Sort from '../organisms/Sort'
import HeroesList from '../organisms/HeroList'
import HeroModal from '../organisms/HeroModal'
const HomePage: React.FC = () => {
  const { t } = useTranslation()
  const hero = useSelector((state: RootState) => state.hero)
  return (
    <>
      <HeroModal />
      <PageWithSearchHeaderTemplate>
        {hero.error && <ApiError error={hero.error.message} />}
        {hero.heroes.length < 1 && !hero.error && !hero.loading && <Welcome />}
        {hero.heroes.length > 0 && <Sort />}
        <HeroesList loading={hero.loading} heroes={hero.heroes} />
      </PageWithSearchHeaderTemplate>
    </>
  )
}

export default HomePage
