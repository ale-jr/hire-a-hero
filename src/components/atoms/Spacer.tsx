import styled from 'styled-components'

type SpacerProps = {
  height: string
  width?: string
}

const Spacer = styled.div<SpacerProps>`
  height: ${({ height }) => height};
  width: ${({ width = '100%' }) => width};
`
export default Spacer
