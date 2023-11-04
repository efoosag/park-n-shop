import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import {mobile} from '../responsive'
import { useLocation } from 'react-router-dom'

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
  const location = useLocation()
  const cat = location.pathname.split("/")[2]

  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value

    })    
  } 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option defaultChecked>Color</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>blue</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option defaultChecked>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="newest">newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>            
          </Select>
        </Filter>        
      </FilterContainer>
      <Products cat={cat} sort={sort} filters={filters}/>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList