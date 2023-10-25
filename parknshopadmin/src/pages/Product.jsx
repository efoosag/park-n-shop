import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { productData } from '../data'
import Chart from '../components/Chart'
import { Publish } from '@mui/icons-material'

const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
`
const ProductWrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ProductTitle  = styled.h1`  
`
const ProductTitleButton  = styled.button`
  padding: 5px 20px;
  border: none;
  font-size: 16px;
  color: #fff;
  background-color: teal;
  border-radius: 10px;
`
const ProductWrapperDetails = styled.div`
  display: flex;
  margin-top: 20px;
`
const ProductWrapperDetailsLeft = styled.div`
  flex: 2;
  border-radius: 10px;
  margin-right: 40px;  
`
const ProductWrapperDetailsRight = styled.div`
  flex: 1;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -webkit-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75); 
`
const ProductDetailsTop = styled.div`
  display: flex;
  align-items: center;
`
const ProductDetailsImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
const ProductDetailsName = styled.span`
  font-weight: 600;
  margin-left: 10px;
`
const ProductDetailsBottom = styled.div`
  margin-top: 20px;
`
const ProductDetailsItem = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductItemKey = styled.span`
  font-weight: 600;
`
const ProductItemValue = styled.span`
  font-weight: 300;
`
const ProductUpdateForm = styled.div`
   flex: 1;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -webkit-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75); 

`
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`
const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`
const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`
const FormLabel = styled.label`
  font-weight: 300;
  margin-bottom: 10px;
`
const FormInput = styled.input`
  margin: 10px 0;
  border: none;
  padding: 5px;
  border-bottom: 1px solid grey;
`
const FormSelect = styled.select`
  margin-bottom: 10px;
  height: 30px;
`
const FormOption = styled.option`
  
`

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const FormUpload = styled.div`
  display: flex;  
  align-items: center;

`
const FormImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`
const FormButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`

const Product = () => {
  return (
    <Wrapper>      
      <ProductWrapperTitle>
        <ProductTitle>Product</ProductTitle>
        <Link to="/new_product">
          <ProductTitleButton>Create</ProductTitleButton>
        </Link>          
      </ProductWrapperTitle>
      <ProductWrapperDetails>
        <ProductWrapperDetailsLeft>
          <Chart data={productData} title="Product Sales Analytics" datakey="Sales"/>
        </ProductWrapperDetailsLeft>
        <ProductWrapperDetailsRight>
          <ProductDetailsTop>
            <ProductDetailsImage src="../../access/images/phone1.jpg" />
            <ProductDetailsName>Phone 1</ProductDetailsName>
          </ProductDetailsTop>
          <ProductDetailsBottom>
            <ProductDetailsItem>
              <ProductItemKey>Id:</ProductItemKey>
              <ProductItemValue>152</ProductItemValue>
            </ProductDetailsItem>
            <ProductDetailsItem>
              <ProductItemKey>Sales:</ProductItemKey>
              <ProductItemValue>5152</ProductItemValue>
            </ProductDetailsItem>
            <ProductDetailsItem>
              <ProductItemKey>Active:</ProductItemKey>
              <ProductItemValue>Yes</ProductItemValue>
            </ProductDetailsItem>
            <ProductDetailsItem>
              <ProductItemKey>In Stock:</ProductItemKey>
              <ProductItemValue>No</ProductItemValue>
            </ProductDetailsItem>
          </ProductDetailsBottom>          
        </ProductWrapperDetailsRight>
      </ProductWrapperDetails>
      <ProductUpdateForm>        
        <Form>
          <FormLeft>
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormInput type="text" placeholder="Phone 1"/>
            </FormItem>
            <FormItem>
              <FormLabel>In Stock</FormLabel>
              <FormSelect name="inStock" id="instock">
                <FormOption value="yes">Yes</FormOption>
                <FormOption value="no">No</FormOption>
              </FormSelect>
            </FormItem>
            <FormItem>
              <FormLabel>Active</FormLabel>
              <FormSelect name="active" id="active">
                <FormOption value="yes">Yes</FormOption>
                <FormOption value="no">No</FormOption>
              </FormSelect>
            </FormItem>            
          </FormLeft>
          <FormRight>
            <FormUpload>
              <FormImage src="../../access/images/phone1.jpg" />
              <FormLabel for="file"><Publish/></FormLabel>
              <FormInput type="file" id="file" style={{display: "none"}}/>
            </FormUpload>
            <FormButton>Update</FormButton>
          </FormRight>          
        </Form>
      </ProductUpdateForm>
    </Wrapper>
  )
}

export default Product