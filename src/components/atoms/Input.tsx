import styled from 'styled-components'
import { ContextualColors } from '../../themes/types'
type TextBoxProps = {
  error?: boolean
}

const TextBox = styled.input<TextBoxProps>`
  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: ${({ error, theme }) => (error ? theme.colors.danger.main : '')};
  }
  font-size: 1.05em;
  height: 100%;
  border: none;
  flex-grow: 1;
`

export default TextBox
