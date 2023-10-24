import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
`
const NewUserTitle = styled.h3`
  font-size: 30px;
`
const Form = styled.form`
  margin-top: 20px;
`
const FormItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 30px;
`
const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  color: gray;
`
const Input = styled.input`
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`
const GenderItem = styled.div`
  margin-top: 10px;
`
const GenderLabel = styled.label`
  font-size: 18px;
  color: grey;
`
const GenderInput = styled.input`
  margin: 0 10px;  
`
const Select = styled.select`
  height: 40px;
  width: 400px;
  padding: 0 5px;
  border-radius: 10px;
  margin-top: 10px;
`
const Option = styled.option``

const FormButton = styled.button`
  margin-top: 20px;
  border: none;
  padding: 10px 20px;
  width: 200px;
  background-color: darkblue;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;

`

const NewUser = () => {
  return (
    <Wrapper>
      <NewUserTitle> Edit User</NewUserTitle>
      <Form>
        <FormItem>                
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
            <Label>Password</Label>
            <Input type='password' placeholder='+234-8038890984'/>
          </Item>
          <Item>
            <Label>Phone</Label>
            <Input placeholder='+234-8038890984'/>
          </Item>
          <Item>
            <Label>Address</Label>
            <Input placeholder='Abuja | Nigeria'/>
          </Item>
          <Item>
            <Label>Gender</Label>
            <GenderItem>
              <GenderLabel for="male">Male</GenderLabel>
              <GenderInput type="radio" id="male" value="male"/>
              <GenderLabel for="female">Female</GenderLabel>
              <GenderInput type="radio" id="female" value="female"/>
            </GenderItem>
          </Item>
          <Item>
            <Select>
              <Option value="yes"> Yes</Option>
              <Option value="no"> No</Option>
            </Select>
          </Item>                               
        </FormItem>
        <FormButton>Create</FormButton>
      </Form>
    </Wrapper>
  )
}

export default NewUser