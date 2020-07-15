import React, { useState } from 'react'
import styled from 'styled-components'
import Typography from '../atoms/Typography'
import Select from '../atoms/Select'
import { useTranslation } from 'react-i18next'
import { useThunkDispatch } from '../../hooks/useThunkDispatch'
import { sortHeroesByPower } from '../../store/hero/actions'
import { HeroPowers } from '../../store/hero/types'
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const TypographyGrow = styled(Typography)`
  flex-grow: 1;
`

const Sort: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useThunkDispatch()
  const powerOptions: Record<string, string> = t('orderByPowerOptions', {
    returnObjects: true,
  })

  const [selected, setSelected] = useState('')
  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.target.value as HeroPowers
    setSelected(selectedValue)
    dispatch(sortHeroesByPower(selectedValue))
  }
  return (
    <FlexContainer>
      <TypographyGrow as="h2">{t('foundHeroes')}</TypographyGrow>
      <Select value={selected} onChange={handleSelect}>
        <option disabled value="">
          {t('orderByPower')}
        </option>
        {Object.keys(powerOptions).map((key) => (
          <option key={key} value={key}>
            {powerOptions[key]}
          </option>
        ))}
      </Select>
    </FlexContainer>
  )
}

export default Sort
