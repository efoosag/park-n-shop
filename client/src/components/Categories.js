import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
padding: 10px;
${mobile({ flexDirection: "column"})}
`
const Title = styled.h2`
  margin: 10px 25px;
`

const Categories = () => {
  return (
    <>
      <Title>Categories</Title>
      <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
    </>
    
  )
}

export default Categories