import styled from 'styled-components'

type CenterContainerProps = {
  height?: string
}

const CenterContainer = styled.div<CenterContainerProps>`
  width: 100%;
  height: ${({ height = '100%' }) => `${height}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`
export default CenterContainer
