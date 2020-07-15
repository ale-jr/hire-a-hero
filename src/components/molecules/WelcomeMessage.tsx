import React from 'react'
import CenterContainer from '../atoms/CenterContainer'
import Typography from '../atoms/Typography'
import { useTranslation } from 'react-i18next'
const WelcomeMessage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <CenterContainer height="calc(100vh - 120px)">
      <Typography as="h1" gutterBottom>
        {t('welcomeTitle')}
      </Typography>
      <Typography as="h3">{t('welcomeDescription')}</Typography>
      <Typography as="h3">{t('userSearchBox')}</Typography>
    </CenterContainer>
  )
}
export default WelcomeMessage
