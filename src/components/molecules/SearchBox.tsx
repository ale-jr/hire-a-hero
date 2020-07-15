import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Input from '../atoms/Input'
import IconButton from '../atoms/IconButton'
import Fieldset from '../atoms/Fieldset'
import HelperText from '../atoms/FormHelperText'
import { useTranslation } from 'react-i18next'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type SearchBoxProps = {
  onSearch(term: string): void
  error?: string
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, error }) => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [pristine, setPristine] = useState(true)
  const [validationError, setValidationError] = useState('')

  const validate = (value: string): boolean => {
    setValidationError(value ? '' : t('errors.missingName'))
    return !!value
  }

  useEffect(() => {
    if (value && pristine) {
      setPristine(false)
    }
    if (!pristine) {
      validate(value)
    }
  }, [value])

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => setValue(event.target.value)
  const handleSearch = (): void => {
    validate(value) && onSearch(value)
  }

  const handleInputKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (event.keyCode == 13) handleSearch()
  }

  const errorMessage = validationError || error
  const hasError = !!errorMessage
  return (
    <Fieldset>
      <Input
        onKeyUp={handleInputKeyUp}
        onChange={handleInputChange}
        value={value}
        placeholder={hasError ? errorMessage : t('searchPlaceholder')}
        error={hasError}
      />
      <IconButton type="button" onClick={handleSearch} icon={faSearch} />
    </Fieldset>
  )
}

export default SearchBox
