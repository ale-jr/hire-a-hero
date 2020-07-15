import styled from 'styled-components'
import breakpoints from 'styled-components-breakpoint'
const Select = styled.select`
  border: none;
  background-color: #ffffff;
  height: fit-content;
  font-size: 1.1em;
  &:focus {
    outline: 0;
  }
  margin-bottom: 25px;
  ${breakpoints('tablet')`margin-bottom:0;`}
`

export default Select
