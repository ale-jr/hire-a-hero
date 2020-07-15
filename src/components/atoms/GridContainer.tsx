import styled from 'styled-components'
import breakpoints from 'styled-components-breakpoint'
type GridContainerProps = {
  gap?: string
}

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-gap: ${({ gap = '1em' }) => gap};
  ${breakpoints('tablet')`grid-template-columns: repeat(3, 1fr);`}
  ${breakpoints('desktop')`grid-template-columns: repeat(5, 1fr);`}
`

export default GridContainer
