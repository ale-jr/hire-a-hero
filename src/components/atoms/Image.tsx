import styled from 'styled-components'
import breakpoints from 'styled-components-breakpoint'
type ImageProps = {
  roundedTop?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Image = styled.img<ImageProps>`
  width: 100%;
  @media screen and (min-width: 600px) {
    width: ${({ size = 'large' }) => {
      switch (size) {
        case 'small':
          return '50%'
        case 'medium':
          return '100%'
        default:
          return '100%'
      }
    }};
  }

  @media screen and (min-width: 1000px) {
    width: ${({ size = 'large' }) => {
    switch (size) {
      case 'small':
        return '30%'
      case 'medium':
        return '50%'
      default:
        return '100%'
    }
  }};
  }

  height: auto;
  ${({ roundedTop }) =>
    roundedTop &&
    `
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;`}
`

export default Image
