import styled from 'styled-components'

type OverlayProps = {
  open: boolean
}

const Overlay = styled.div<OverlayProps>`
  background: rgba(196, 196, 196, 0.59);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 999;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Overlay
