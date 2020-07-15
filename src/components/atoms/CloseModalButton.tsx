import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CloseButton = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  right: 15px;
  top: 15px;
  color: #585858;
  cursor: pointer;
  :focus {
    outline: 0;
  }
`
type CloseProps = {
  onClick(): void
}

const Close: React.FC<CloseProps> = ({ onClick }) => (
  <CloseButton onClick={onClick}>
    <FontAwesomeIcon size="lg" icon={faTimes} />
  </CloseButton>
)

export default Close
