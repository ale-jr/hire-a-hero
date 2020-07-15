import React from 'react'
import Grid from '../atoms/GridContainer'
import HeroCard from '../molecules/HeroCard'
import HeroCardSkeleton, { RepeatSkeleton } from '../molecules/HeroCardSkeleton'
import { Hero } from '../../store/hero/types'
import { showHeroModal } from '../../store/hero/actions'
import { useDispatch } from 'react-redux'
type HeroListProps = {
  heroes: Hero[]
  loading: boolean
}

const HeroList: React.FC<HeroListProps> = ({ heroes, loading }) => {
  const dispatch = useDispatch()
  const handleHeroSelect = (hero: Hero) => dispatch(showHeroModal(hero))

  return (
    <Grid>
      {!loading &&
        heroes.map((hero, key) => (
          <HeroCard
            key={key}
            hero={hero}
            onHeroClick={() => handleHeroSelect(hero)}
          />
        ))}
      {loading && <RepeatSkeleton count={10} skeleton={HeroCardSkeleton} />}
    </Grid>
  )
}

export default HeroList
