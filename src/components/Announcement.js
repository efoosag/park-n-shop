import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  font-weight: 800;
  color: white;
  background-color: tomato;  
  display: flex;
  align-items: center;
  justify-content: center;
`

const Announcement = () => {
  return (
    <Container>Today's special offer! 10% Discount for deal above $100</Container>
  )
}

export default Announcement