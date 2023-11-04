import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  height: 70vh;
  position: relative; 
`

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  ${mobile({ height: "60vh"})}
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  margin-bottom: 20px;
  ${mobile({fontSize: "24px"})}
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
;
`
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.im}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>      
    </Container>
  )
}

export default CategoryItem