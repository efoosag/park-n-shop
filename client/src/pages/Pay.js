import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const Button = styled.button`
  width: 100px;
  background-color: black;
  color: #fff;
  padding: 5px; 
  margin-top: 50vh;
  margin-left: 50vw;
`
const KEY = "pk_test_51O2DNKJDKlSmQBsW7ZcRfF4SlRHQiwGgETm8B5yCuuXiMGUFbTarrMaZc7xzxPectsiiUs8RCXy9gG4R6FI3a80e00C91MuYqc"

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null); 
  
  const onToken = (token) => {
    setStripeToken(token)    
  };

  useEffect(() => {
    const makeRequest = async () => {
      try{
        const res = await axios.post('http://localhost:4000/v1/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 20000
        })
        console.log(res.data)       
      } catch(err){
        console.log(err)
      }
    }
    stripeToken && makeRequest();
  },[stripeToken])

  return (    
      <StripeCheckout
        name= "Park n Shop"
        image="https://avatars.githubusercontent.com/u/1486366?v=4"
        billingAddress
        shippingAddress
        description='Your bill is $200'
        amount={20000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button>
          Pay
        </Button>
      </StripeCheckout>   
    
  )
}

export default Pay