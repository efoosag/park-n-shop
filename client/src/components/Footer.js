import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``

const Description = styled.p`
  margin: 20px 0;
`

const SocialIconContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bg};
  margin-right: 20px;
`

const Middle = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#fff8f8"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PARK n SHOP.</Logo>
        <Description>The Lorem example have widely used for a very longtime to act as placeholder during web development.The Lorem example have widely used for a very longtime to act as placeholder during web development.The Lorem example have widely used for a very longtime to act as placeholder during web development.The Lorem example have widely used for a very longtime to act as placeholder during web development.</Description>
        <SocialIconContainer>
          <SocialIcon bg="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialIconContainer>
      </Left>
      <Middle>
        <Title>Use Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Middle>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight: "10px"}} />1002 jagaba street, chikun kaduna </ContactItem>
        <ContactItem><Phone style={{marginRight: "10px"}} />+2348038890984</ContactItem>
        <ContactItem><MailOutline style={{marginRight: "10px"}} />efoosagsite@gmail.com</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer