import styled from 'styled-components'
import breakpoints from 'styled-components-breakpoint'

const MainContainer = styled.main`
  padding: 10px;
  padding-top: 30px;
  ${breakpoints('tablet')`padding: 20px;`}
  ${breakpoints('desktop')`padding:  20px 30px;`}
`
export default MainContainer
