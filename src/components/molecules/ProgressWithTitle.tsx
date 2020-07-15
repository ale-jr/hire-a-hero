import React from 'react'
import Typography from '../atoms/Typography'
import Progress from '../atoms/Progress'

type ProgressWithTitle = {
  value: string
  max: string
  title: string
}

const ProgressWithTitle: React.FC<ProgressWithTitle> = ({
  value,
  title,
  max,
}) => {
  return (
    <>
      <Typography>{title}</Typography>
      <Progress value={value} max={max} />
    </>
  )
}

export default ProgressWithTitle
