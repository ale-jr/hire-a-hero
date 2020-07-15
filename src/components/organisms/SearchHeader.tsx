import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Brand from '../atoms/Brand'
import Header from '../molecules/Header'
import SearchBox from '../molecules/SearchBox'
import { fetchHeroesByName } from '../../store/hero/asyncActions'
import { RootState } from '../../store/store'
import { useThunkDispatch } from '../../hooks/useThunkDispatch'
import { useSelector } from 'react-redux'
const SearchHeader: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useThunkDispatch()
  const handleSearch = (name: string): void => dispatch(fetchHeroesByName(name))
  const heroes = useSelector((state: RootState) => state.hero.heroes)
  const fetchError = useSelector((state: RootState) => state.hero.error)
  return (
    <Header fixed gutterBottom>
      <Brand grow>{t('brand')}</Brand>
      <SearchBox error={fetchError?.message} onSearch={handleSearch} />
    </Header>
  )
}

export default SearchHeader
