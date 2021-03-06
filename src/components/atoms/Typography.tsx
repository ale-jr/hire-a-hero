import styled from 'styled-components'
import { ContextualColors } from '../../themes/types'

type TypographyProps = {
  color?: ContextualColors
  gutterBottom?: boolean
  strong?: boolean
}

const Typography = styled.p<TypographyProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color].main : '#000000'};
  padding-bottom: ${({ gutterBottom }) => (gutterBottom ? '15px' : '0px')};
  ${({ strong }) => strong && 'font-weight: bold;'}
`

export default Typography
