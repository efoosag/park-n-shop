import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
`
const NewProductTitle = styled.h1`
  font-size: 30px;
`
const Form = styled.form`
  margin-top: 20px;
`
const FormItem = styled.div`
  display: flex;
  flex-direction: column;
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
  
  background-color: darkblue;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;

`

const NewProduct = () => {
  return (
    <Wrapper>
      <NewProductTitle>New Product</NewProductTitle>
      <Form>
        <FormItem>
          <Item>
            <Label for="file">Image</Label>
            <Input type="file" id="file" style={{border: "none"}}/>
          </Item>                
          <Item>
            <Label>Name</Label>
            <Input placeholder='Phone 1'/>
          </Item>
          <Item>
            <Label>Stock</Label>
            <Input placeholder='123'/>
          </Item>         
          <Item>
          <Label>Active</Label>
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

export default NewProduct