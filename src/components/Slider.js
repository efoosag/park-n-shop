import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { slideItems } from '../data'

const Container = styled.div`
  display: flex;  
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 60px;
  height: 60px;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.3;
  z-index: 10;
`
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;  
  align-items: center;
  background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;   
`
const Image = styled.img`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoContainer = styled.div`
  flex: 1; 
`
const Title = styled.h1`
  font-size: 70px;
`

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: capitalize;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideindex, setSlideIndex] = useState(0)

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideindex > 0 ? slideindex - 1 : 4 )
    } else {
      setSlideIndex(slideindex < 4 ? slideindex + 1 : 0)
    }
  } 

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlide("left")}>
        <ArrowLeftOutlined sx={{ fontSize: 40 }}/>
      </Arrow>
      <Wrapper slideIndex={slideindex}>
        {slideItems.map((slideItem) => (
          <Slide bg={slideItem.bg} key={slideItem.id}>
            <ImgContainer>            
              <Image src={slideItem.im}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{slideItem.title}</Title>
              <Description>{slideItem.description}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}                
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlide("left")}> 
        <ArrowRightOutlined sx={{ fontSize: 40 }}/>
      </Arrow>
    </Container>
  )
}

export default Slider