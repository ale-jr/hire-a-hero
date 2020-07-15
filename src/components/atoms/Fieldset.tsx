import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Fieldset = styled.div`
  background-color: white;
  border: none;
  padding: 9px 15px;
  border-radius: 50px;
  display: flex;
  width: 100%;
  margin-top: 10px;
  ${breakpoint('tablet')`width: unset; margin-top:0;`};
`

export default Fieldset
