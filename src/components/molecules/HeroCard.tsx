import React from 'react'
import styled from 'styled-components'
import Typography from '../atoms/Typography'
import Image from '../atoms/Image'
import Card from '../atoms/Card'
import { Hero } from '../../store/hero/types'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
type HeroCardProps = {
  hero: Hero
  onHeroClick(): void
}

const PaddingContainer = styled.div`
  padding: 10px;
`

const HeroCard: React.FC<HeroCardProps> = ({ hero, onHeroClick }) => {
  const { t } = useTranslation()
  return (
    <Card onClick={onHeroClick} role="button">
      <Image src={hero.image.url} roundedTop />
      <PaddingContainer>
        <Typography strong>
          {hero.name} ({t(`alignment.${hero.biography.alignment}`)})
        </Typography>
        <Typography>
          <FontAwesomeIcon icon={faBriefcase} /> {hero.work.occupation}
        </Typography>
      </PaddingContainer>
    </Card>
  )
}

export default HeroCard
