import React from 'react'
import styled from 'styled-components'
import SearchHeader from '../organisms/SearchHeader'
import Main from '../atoms/MainContainer'

type PageWithSearchHeroesHeaderTemplateProps = {}

const PageWithSearchHeroesHeaderTemplate: React.FC<PageWithSearchHeroesHeaderTemplateProps> = ({
  children,
}) => {
  return (
    <>
      <SearchHeader />
      <Main>{children}</Main>
    </>
  )
}

export default PageWithSearchHeroesHeaderTemplate
