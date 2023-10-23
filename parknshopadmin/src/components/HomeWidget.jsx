import React from 'react'
import styled from "styled-components"
import HomeWidgetLeft from './HomeWidgetLeft'
import HomeWidgetRight from './HomeWidgetRight'

const Wrapper = styled.div`
  display: flex;
  margin: 20px;  
`

const HomeWidget = () => {
  return (
    <Wrapper>
      <HomeWidgetLeft />
      <HomeWidgetRight />
    </Wrapper>
  )
}

export default HomeWidget