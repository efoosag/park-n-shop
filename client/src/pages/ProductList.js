import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import {mobile} from '../responsive'

const Container = styled.div``
const Title = styled.h1`
  margin-top: 10px;
  margin-left: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between; 

`
const Filter = styled.div`
  margin: 20px;
  display: flex;
  ${mobile({padding: "0 10px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({margin: "0", fontSize: "16px"})}
`
const Select = styled.select` 
  padding: 10px;
  margin-left: 20px;
  ${mobile({margin: "10px 0"})}
`

const Option = styled.option`
margin: 10px 0;
`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>white</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>            
          </Select>
        </Filter>        
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList