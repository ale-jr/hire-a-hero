import React from 'react'
import styled from 'styled-components'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
type IconButtonProps = {
  icon: FontAwesomeIconProps['icon']
  onClick?(): void
  type: 'button' | 'reset' | 'submit'
}

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  &:focus {
    outline: 0;
  }
  color: ${({ theme }) => theme.colors.primary.light};
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`

const Button: React.FC<IconButtonProps> = ({ icon, type, onClick }) => {
  return (
    <IconButton type={type} onClick={onClick}>
      <FontAwesomeIcon size="lg" icon={icon} />
    </IconButton>
  )
}

export default Button
