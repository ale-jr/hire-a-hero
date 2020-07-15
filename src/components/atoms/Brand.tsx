import React from 'react'
import styled from 'styled-components'

type BrandProps = {
  grow?: boolean
}

const Brand = styled.span<BrandProps>`
  color: ${({ theme }): string => theme.colors.primary.contrast};
  font-weight: bolder;
  font-size: 1.5em;
  ${({ grow }): string | undefined | false => grow && 'flex-grow: 1;'}
`

export default Brand
