import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("../images/coat3.png");
  background-size: cover;  
  display: flex;
  align-items: center;
  justify-content: center; 
  `

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 20px 10px;
  background-color: tomato;
  cursor: pointer;
  margin-bottom: 10px;
`
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>          
          <Input placeholder="username"/>          
          <Input placeholder="password"/>         
          <Button>SIGN IN</Button>
          <Link>DO NOT REMEMBER YOUR ACCOUNT DETAILS?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login