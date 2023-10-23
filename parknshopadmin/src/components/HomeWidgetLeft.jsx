import { Visibility } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  flex: 1;
  padding: 20px; 
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -webkit-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75); 
`

const WidgetTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
`
const WidgetItem = styled.ul`
  list-style: none;
  margin: 20px 0;
`
const WidgetLists = styled.li`
  display: flex;
  justify-content: space-between;
`

const WidgetImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const WidgetDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const WidgetUser = styled.span`
  font-weight: 600;
  font-size: 20px;
`

const WidgetDiscipline = styled.span`
  font-weight: 100;
`

const WidgetButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  font-weight: 300;
  background-color: #f5f5f5;
`


const HomeWidgetLeft = () => {
  return (
    <Wrapper>
      <WidgetTitle>New Join User</WidgetTitle>
      <WidgetItem>
        <WidgetLists>
          <WidgetImage src='../../access/images/profile_pic.jpeg' />
          <WidgetDetails>
            <WidgetUser>Victor</WidgetUser>
            <WidgetDiscipline>Web Developer</WidgetDiscipline>            
          </WidgetDetails> 
          <WidgetButton>
            <Visibility style={{fontSize:"18px", marginRight: "10px"}}/>
            Display
          </WidgetButton>
        </WidgetLists>               
      </WidgetItem>
      <WidgetItem>
        <WidgetLists>
          <WidgetImage src='../../access/images/profile_pic.jpeg' />
          <WidgetDetails>
            <WidgetUser>Victor</WidgetUser>
            <WidgetDiscipline>Web Developer</WidgetDiscipline>            
          </WidgetDetails> 
          <WidgetButton>
            <Visibility style={{fontSize:"18px", marginRight: "10px"}}/>
            Display
          </WidgetButton>
        </WidgetLists>               
      </WidgetItem>
      <WidgetItem>
        <WidgetLists>
          <WidgetImage src='../../access/images/profile_pic.jpeg' />
          <WidgetDetails>
            <WidgetUser>Victor</WidgetUser>
            <WidgetDiscipline>Web Developer</WidgetDiscipline>            
          </WidgetDetails> 
          <WidgetButton>
            <Visibility style={{fontSize:"18px", marginRight: "10px"}}/>
            Display
          </WidgetButton>
        </WidgetLists>               
      </WidgetItem>
      <WidgetItem>
        <WidgetLists>
          <WidgetImage src='../../access/images/profile_pic.jpeg' />
          <WidgetDetails>
            <WidgetUser>Victor</WidgetUser>
            <WidgetDiscipline>Web Developer</WidgetDiscipline>            
          </WidgetDetails> 
          <WidgetButton>
            <Visibility style={{fontSize:"18px", marginRight: "10px"}}/>
            Display
          </WidgetButton>
        </WidgetLists>               
      </WidgetItem>
      <WidgetItem>
        <WidgetLists>
          <WidgetImage src='../../access/images/profile_pic.jpeg' />
          <WidgetDetails>
            <WidgetUser>Victor</WidgetUser>
            <WidgetDiscipline>Web Developer</WidgetDiscipline>            
          </WidgetDetails> 
          <WidgetButton>
            <Visibility style={{fontSize:"18px", marginRight: "10px"}}/>
            Display
          </WidgetButton>
        </WidgetLists>               
      </WidgetItem>
    </Wrapper>
  )
}

export default HomeWidgetLeft