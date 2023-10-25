import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
`
const UserTitleContainer = styled.div` 
`
const UserWrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const UserTitle  = styled.h1`  
`
const UserTitleButton  = styled.button`
  padding: 5px 20px;
  border: none;
  font-size: 16px;
  color: #fff;
  background-color: teal;
  border-radius: 10px;
`
const UserWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`
const UserLeft = styled.div`
  flex: 1;
  margin-right: 10px;
  padding: 20px; 
  border-radius: 10px;
  box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -webkit-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75); 
`
const UserLeftTop = styled.div`
  display: flex;
  align-items: center;
`
const UserLeftTopImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
  margin-right: 20px;
`
const UserLeftTopDetails = styled.div`
  display: flex;
  flex-direction: column;
`
const UserLeftTopName = styled.span`
  font-size: 20px;
  font-weight: 600;
`
const UserLeftTopDiscipline = styled.span`
  font-weight: 300;
`
const UserLeftBottom = styled.div`
  margin-top: 20px;
`

const UserLeftBottomTitle = styled.div`
  font-weight: 300; 
  color: #bdbaba;
  margin-top: 20px;
`
const UserLeftBottomDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const UserLeftBottomDetail = styled.span`
  margin-left: 10px;
`
const UserRight = styled.div`
  flex: 2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -webkit-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75); 
`
const UserUpdateTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`
const Form = styled.form`
  margin-top: 20px;
`
const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
`
const FormItemLeft = styled.div`
  flex: 1;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const Label = styled.label`
margin-bottom: 10px;
  margin-right: 10px;
`
const Input = styled.input`
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
`

const FormItemRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const FormItemRightImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
`

const FormUpLoad = styled.div`
  display: flex; 
  justify-content:  flex-end;
  align-items: center;
`

const FormButton = styled.button`
  width: 40%;
  margin-right: 20px;
  align-self: flex-end;
  border-radius: 5px;
  padding: 10px 5px;
  background-color: darkblue;
  color: #fff;
  border: none;
  font-weight: 600;
`

const User = () => {
  return (
    <Wrapper>
      <UserTitleContainer>
        <UserWrapperTitle>
          <UserTitle>Edit User</UserTitle>
          <Link to="/new_user">
            <UserTitleButton>Create</UserTitleButton>
          </Link>          
        </UserWrapperTitle>        
        <UserWrapper>
          <UserLeft>
            <UserLeftTop>
              <UserLeftTopImage src='../../access/images/profile_pic.jpeg'/>
              <UserLeftTopDetails>
                <UserLeftTopName>Victor</UserLeftTopName>
                <UserLeftTopDiscipline>Software Engineer</UserLeftTopDiscipline>
              </UserLeftTopDetails>
            </UserLeftTop>
            <UserLeftBottom>
              <UserLeftBottomTitle>Account Details</UserLeftBottomTitle>
              <UserLeftBottomDetailsWrapper>
                <PermIdentity fontSize='16px' />
                <UserLeftBottomDetail>efoosag</UserLeftBottomDetail>
              </UserLeftBottomDetailsWrapper>
              <UserLeftBottomDetailsWrapper>
                <CalendarToday fontSize='16px' />
                <UserLeftBottomDetail>02-10-1970</UserLeftBottomDetail>
              </UserLeftBottomDetailsWrapper>
              <UserLeftBottomTitle>Contact Details</UserLeftBottomTitle>
              <UserLeftBottomDetailsWrapper>
                <PhoneAndroid fontSize='16px' />
                <UserLeftBottomDetail>+234-8033890984</UserLeftBottomDetail>
              </UserLeftBottomDetailsWrapper>
              <UserLeftBottomDetailsWrapper>
                <MailOutline fontSize='16px' />
                <UserLeftBottomDetail>efoosagsite@gmail.com</UserLeftBottomDetail>
              </UserLeftBottomDetailsWrapper>
              <UserLeftBottomDetailsWrapper>
                <LocationSearching fontSize='16px'/>
                <UserLeftBottomDetail>Abuja | Nigeria</UserLeftBottomDetail>
              </UserLeftBottomDetailsWrapper>              
            </UserLeftBottom>
          </UserLeft>
          <UserRight>
            <UserUpdateTitle> Edit User</UserUpdateTitle>
            <Form>
              <FormItem>
                <FormItemLeft>
                  <Item>
                    <Label>Username</Label>
                    <Input placeholder='efoosag'/>
                  </Item>
                  <Item>
                    <Label>Full Name</Label>
                    <Input placeholder='Victor osagie'/>
                  </Item>
                  <Item>
                    <Label>Email</Label>
                    <Input placeholder='efoosagsite@gmail.com'/>
                  </Item>
                  <Item>
                    <Label>Phone</Label>
                    <Input placeholder='+234-8038890984'/>
                  </Item>
                  <Item>
                    <Label>Address</Label>
                    <Input placeholder='Abuja | Nigeria'/>
                  </Item>
                </FormItemLeft>
                <FormItemRight>
                  <FormUpLoad>
                    <FormItemRightImage src='../../access/images/profile_pic.jpeg'/>
                    <Label htmlFor='file'>
                      <Publish style={{cursor: 'pointer'}}/>
                    </Label>
                    <Input type='file' id='file' style={{display: 'none'}}/>
                  </FormUpLoad>
                  <FormButton>Update User</FormButton>
                </FormItemRight>
              </FormItem>
            </Form>
          </UserRight>
        </UserWrapper>
      </UserTitleContainer>
    </Wrapper>
  )
}

export default User