import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Product from './Product'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`

const Title = styled.h2`
  margin: 10px 25px;
`

const Products = ({cat, sort, filters}) => {
  console.log(cat, filters, sort)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])  

  useEffect(() => { 
    const getProducts = async(category) => {
      const BASEURL = "http://localhost:4000/v1/"
      try{
        const res = await axios.get(category ? `${BASEURL}/products?category=${category}`: `${BASEURL}/products`)
        console.log(res.data)  
        setProducts(res.data)           
      } catch(err){
        console.log(err)
      }
    }   
    getProducts(cat)
    
  },[cat])

  useEffect(() => {
    cat && 
    setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key, value]) => 
        item[key].includes(value)        
      ))
    )
  },[products, cat, filters])
  
  useEffect(() => {
    if(sort ==='newest') {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      )
    } else if(sort ==='asc') {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      )
    } else{
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => new Date(b.price) - new Date(a.price))
      )
    }
  },[sort])
  return (
    <>
      <Title>Products</Title>
      <Container>      
      {
        cat
         ?
        filteredProducts.map(item => (
          <Product key={item.id} item={item} />
        ))
        :
        products.map(item => (
          <Product key={item.id} item={item} />
        ))
      }
    </Container>
    </>    
  )
}

export default Products