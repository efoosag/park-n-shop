import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import  { mobile } from "../responsive"

const Container = styled.div`
  height: 60vh;
  background-color: #fef5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({textAlign: "center"})}
`
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobile({width: "80%"})}
`
const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
`
const Button = styled.button`
  border: none;
  background-color: teal;  
  flex: 1;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>To get more about favourite products</Description>
      <InputContainer>
        <Input placeholder="Your email here....." />
        <Button>
          <Send />
        </Button>
      </InputContainer>      
    </Container>
  )
}

export default Newsletter