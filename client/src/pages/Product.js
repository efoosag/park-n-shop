import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import {mobile} from '../responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../httpRequestMethods'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection: "column"})}
`

const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({width: "75%", height: "40vh"})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({padding: "10px"})}
`

const Title = styled.h1`
font-weight: 200;
`

const Description = styled.p`
  margin: 20px 0;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${props => props.color};
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

const Button = styled.button`
  padding: 15px;
  font-weight: 500;
  border: 2px solid tomato;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: tomato;
  }
`

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]  
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState(null)
  const [size, setSize] = useState(null)

  const handleQuantity = (type) => {
    if(type === "decrease"){
      quantity > 1 && setQuantity(quantity - 1)
    }else{
      setQuantity(quantity + 1)
    }
  } 

  const handleClick = () => {
    console.log(size, color, quantity, product)
  }

  useEffect(() => { 
    const getProduct = async() => {      
      try{        
        const res = await publicRequest.get(`/products/${id}`)
        console.log(res.data)  
        setProduct(res.data)                    
      } catch(err){
        console.log(err)
      }
    }   
    getProduct()    
  },[id])
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color &&
                product.color.map(c => <FilterColor color={c} key={c} onClick={() => setColor(c)}/>)
              }                                      
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={e => setSize(e.target.value)}>
              {product.size &&
                product.size.map(s => <FilterSizeOption key={s}>{s}</FilterSizeOption>   )
              }                 
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("decrease")}  style={{cursor: "pointer"}}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("increase")} style={{cursor: "pointer"}}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product