import React from 'react'
import styled from 'styled-components'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const Navigation = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
`
const Wrapper = styled.div`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLeft = styled.div`
  font-size: 30px;
  color: darkblue;
  font-weight: 600;
`
const NavRight = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.span``

const Icon = styled.span`
  position: relative;
  margin-right: 10px;
  cursor: pointer;  
`

const Badge = styled.span`
  width: 15px;
  height: 15px;
  font-size: 10px;
  background-color: darkblue;
  border-radius: 50%;
  position: absolute;
  color: #fff;
  left: 5px;
  top: -5px;
  display: flex;
  justify-content: center;
`
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Navigation>
      <Wrapper>
        <NavLeft>
          <Logo>PARKnSHOP-ADMIN</Logo>
        </NavLeft>
        <NavRight>
          <Icon>
            <NotificationsNone />
            <Badge>2</Badge>
          </Icon>
          <Icon>
            <Language />
          <Badge>2</Badge>
          </Icon>
          <Icon>
          <Settings />
          </Icon>
          <Img src="../../access/images/profile_pic.jpeg"/>
        </NavRight>
      </Wrapper>
    </Navigation>
  )
}

export default Navbar