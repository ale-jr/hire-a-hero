import React from 'react'
import styled from 'styled-components'
import Typography from '../atoms/Typography'
import Image from '../atoms/Image'
import Card from '../atoms/Card'
import { Hero } from '../../store/hero/types'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'
const PaddingContainer = styled.div`
  padding: 10px;
`

const HeroCardSkeleton: React.FC = () => {
  return (
    <Card>
      <Skeleton width="100%" height={500} />
      <PaddingContainer>
        <Typography strong>
          <Skeleton />
        </Typography>
        <Typography>
          <Skeleton width="80%" />
        </Typography>
      </PaddingContainer>
    </Card>
  )
}

type RepeatSkeletonProps = {
  count: number
  skeleton: React.FC
}
export const RepeatSkeleton: React.FC<RepeatSkeletonProps> = ({
  count,
  skeleton: Skeleton,
}) => {
  const Skeletons: JSX.Element[] = []
  for (let i = 0; i < count; i++) {
    Skeletons.push(<Skeleton key={i} />)
  }
  return <>{Skeletons}</>
}

export default HeroCardSkeleton
