import React from 'react'
import ModalContainer from '../atoms/ModalContainer'
import ModalOverlay from '../atoms/Overlay'
import CloseButton from '../atoms/CloseModalButton'
import styled from 'styled-components'



type ModalProps = {
  open: boolean
  onClose(): void
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => (
  <>
    <ModalOverlay open={open} onClick={onClose} />
    <ModalContainer open={open}>
      <CloseButton onClick={onClose} />
      {children}
    </ModalContainer>
  </>
)

export default Modal
