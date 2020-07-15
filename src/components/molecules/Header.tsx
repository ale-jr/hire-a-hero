import React from 'react'
import styled from 'styled-components'
import Spacer from '../atoms/Spacer'

type HeaderProps = {
  fixed?: boolean
  gutterBottom?: boolean
}
const StyledHeader = styled.header<HeaderProps>`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.secondary.main};
  box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.75);
  padding: 20px 10px;
  box-sizing: border-box;
  flex-wrap: wrap;
  ${({ fixed }): string | undefined | false => fixed && 'position: fixed;'}
  ${({ gutterBottom }): string | undefined | false =>
    gutterBottom && 'margin-bottom: 15px'}
`

const Header: React.FC<HeaderProps> = (props) => (
  <>
    <StyledHeader {...props} />
    {props.fixed && <Spacer height={props.gutterBottom ? '80px' : '65px'} />}
  </>
)

export default Header
