import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { hideHeroModal } from '../../store/hero/actions'
import { HeroPowers } from '../../store/hero/types'
import { RootState } from '../../store/store'
import Modal from '../molecules/Modal'
import Typography from '../atoms/Typography'
import Image from '../atoms/Image'
import styled from 'styled-components'
import breakpoints from 'styled-components-breakpoint'
import ProgressWithTitle from '../molecules/ProgressWithTitle'

const ImageAndInfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const InfoContainer = styled.aside`
  padding: 15px;
  width: 100%;
  ${breakpoints('desktop')`width: 40%;`}
`

const HeroModal: React.FC = () => {
  const { t } = useTranslation()
  const hero = useSelector((state: RootState) => state.hero.selectedHero)
  const dispatch = useDispatch()
  const handleModalClose = () => dispatch(hideHeroModal())
  const powers: Record<string, string> = t('orderByPowerOptions', {
    returnObjects: true,
  })

  return (
    <Modal open={!!hero} onClose={handleModalClose}>
      {hero && (
        <>
          <ImageAndInfoGrid>
            <Image size="medium" src={hero.image.url} />
            <InfoContainer>
              <Typography as="h2">{hero.name}</Typography>
              <Typography strong>{t('info.realName')}</Typography>
              <Typography gutterBottom>
                {hero.biography['full-name']}
              </Typography>
              <Typography strong>{t('info.placeOfBirth')}</Typography>
              <Typography gutterBottom>
                {hero.biography['place-of-birth']}
              </Typography>
              <Typography strong>{t('info.alignment')}</Typography>
              <Typography gutterBottom>
                {t(`alignment.${hero.biography['alignment']}`)}
              </Typography>
              <Typography strong>{t('info.work')}</Typography>
              <Typography gutterBottom>{hero.work.occupation}</Typography>
              <Typography strong>{t('info.connections')}</Typography>
              <Typography gutterBottom>
                {hero.connections['group-affiliation']}
              </Typography>
            </InfoContainer>
          </ImageAndInfoGrid>
          <Typography as="h2">{t('info.powers')}</Typography>
          {Object.keys(powers).map((key) => (
            <ProgressWithTitle
              key={key}
              title={t(`orderByPowerOptions.${key}`)}
              value={hero.powerstats[key as HeroPowers]}
              max="100"
            />
          ))}
        </>
      )}
    </Modal>
  )
}

export default HeroModal
