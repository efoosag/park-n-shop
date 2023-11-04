import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center; 
  transition: all 0.5s ease ;
`

const Container = styled.div`
  flex: 1;
  flex-wrap: wrap;
  margin: 5px;
  width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfb;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`
const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Price = styled.span`
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 85%;
  font-weight: 600;
  font-size: 18px;
`

const Image = styled.img`
  width: 280px;
  height: 60%;
  z-index: 2;
`
const Icon = styled.div`
  z-index: 3;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #e9fdfd;
    transform: scale(1.2);
  }
`

const Product = ({ item }) => {
  return (
    <Container>      
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Price>${item.price}</Price>
    </Container>
  )
}

export default Product