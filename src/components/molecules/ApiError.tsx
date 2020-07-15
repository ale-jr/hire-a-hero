import React from 'react'
import Typography from '../atoms/Typography'
import styled from 'styled-components'
import CenterContainer from '../atoms/CenterContainer'
type ApiErrorProps = {
  error: string
}

const ApiError: React.FC<ApiErrorProps> = ({ error }) => (
  <CenterContainer>
    <Typography color="danger" as="h2">
      {error}
    </Typography>
  </CenterContainer>
)

export default ApiError
