import styled from 'styled-components'

type FormHelperTextProps = {
  error?: boolean
}

const FormHelperText = styled.small<FormHelperTextProps>`
  color: ${({ theme, error }): string =>
    error ? theme.colors.danger.main : theme.colors.primary.contrast};
`

export default FormHelperText
