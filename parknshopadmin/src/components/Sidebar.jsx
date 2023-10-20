import { AttachMoney, DynamicFeed, Equalizer, InventoryOutlined, LineStyle, MailOutline, Message, Person2Outlined, Report, Timeline, TrendingUp, WorkOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const SidebarContainer = styled.div`
  flex: 1;
  position: sticky;
  top: 50px;
  background-color: #faf8f8;
`
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  color: #666;
`
const SideItemContainer = styled.div`
  margin-bottom: 10px;
`
const SideItemTitle = styled.h3`
  color: grey;
  font-size: 15px;
  
`
const SideItem = styled.ul`
  list-style: none;
`
const SideItemList= styled.li`  
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${props => props.type === "active" && "#666"};
  color: ${props => props.type === "active" && "#fff"};
  &:active, &:hover {
    background-color: #666;
    color: #fff
  }
`

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Wrapper>
        <SideItemContainer>
          <SideItemTitle>Dashboard</SideItemTitle>
          <SideItem>
            <SideItemList type="active">
              <LineStyle style={{fontSize: '20px', marginRight: '5px'}}/> 
              Home
            </SideItemList>
            <SideItemList>
              <Timeline style={{fontSize: '20px', marginRight: '5px'}}/>
              Analytics
            </SideItemList>
            <SideItemList>
              <TrendingUp style={{fontSize: '20px', marginRight: '5px'}}/>
              Sales
            </SideItemList>
          </SideItem>
        </SideItemContainer> 
        <SideItemContainer>
          <SideItemTitle>Quick Menu</SideItemTitle>
          <SideItem>
            <SideItemList>
              <Person2Outlined style={{fontSize: '20px', marginRight: '5px'}}/> 
              Users
            </SideItemList>
            <SideItemList>
              <InventoryOutlined style={{fontSize: '20px', marginRight: '5px'}}/>
              Products
            </SideItemList>
            <SideItemList>
              <AttachMoney style={{fontSize: '20px', marginRight: '5px'}}/>
              Transactions
            </SideItemList>
            <SideItemList>
              <Equalizer style={{fontSize: '20px', marginRight: '5px'}}/>
              Report
            </SideItemList>
          </SideItem>
        </SideItemContainer>
        <SideItemContainer>
          <SideItemTitle>Notification</SideItemTitle>
          <SideItem>
            <SideItemList>
              <MailOutline style={{fontSize: '20px', marginRight: '5px'}}/> 
              Mail
            </SideItemList>
            <SideItemList>
              <DynamicFeed style={{fontSize: '20px', marginRight: '5px'}}/>
              Feedback
            </SideItemList>
            <SideItemList>
              <Message style={{fontSize: '20px', marginRight: '5px'}}/>
              Messages
            </SideItemList>
          </SideItem>
        </SideItemContainer> 
        <SideItemContainer>
          <SideItemTitle>Staff</SideItemTitle>
          <SideItem>
            <SideItemList>
              <WorkOutlined style={{fontSize: '20px', marginRight: '5px'}}/> 
              Manage
            </SideItemList>
            <SideItemList>
              <Timeline style={{fontSize: '20px', marginRight: '5px'}}/>
              Analytics
            </SideItemList>
            <SideItemList>
              <Report style={{fontSize: '20px', marginRight: '5px'}}/>
              Reports
            </SideItemList>
          </SideItem>
        </SideItemContainer>     
      </Wrapper>
    </SidebarContainer>
  )
}

export default Sidebar