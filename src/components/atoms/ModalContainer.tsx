import styled from 'styled-components'
import breakpoints from 'styled-components-breakpoint'
type ModalContainerProps = {
  open: boolean
}

const ModalContainer = styled.div<ModalContainerProps>`
  overflow: auto;
  position: fixed;
  z-index: 9999;
  bottom: ${({ open }) => (open ? '0%' : '-100%')};
  left: 50%;
  transition: all 0.3s ease;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  background: #ffffff;

  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06);
  transform: translateX(-50%);

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  box-sizing: border-box;

  padding: 15px;
  padding-top: 40px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  scrollbar-width: thin;
  scrollbar-color: #757f8c transparent;

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #757f8c;
    border-radius: 6px;
    margin: 2px;
  }
  height: 90%;
  width: 100%;

  ${breakpoints('tablet')`
    height: 80%;
    width: 80%;
  `}
  ${breakpoints('desktop')`
    height: 70%;
    width: 800px;
  `}
`

export default ModalContainer
