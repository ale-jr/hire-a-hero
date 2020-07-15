import React from 'react'
import CenterContainer from '../atoms/CenterContainer'
import Typography from '../atoms/Typography'
import { useTranslation } from 'react-i18next'
const WelcomeMessage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <CenterContainer>
      <Typography as="h3">{t('welcome')}</Typography>
    </CenterContainer>
  )
}
export default WelcomeMessage
