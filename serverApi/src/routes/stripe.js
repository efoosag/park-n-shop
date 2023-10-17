const express = require('express');

const stripe = require('stripe')(process.env.STRIPE_KEY)

const stripeRouter = express.Router();

stripeRouter.post('/', (req, res) => {
  stripe.charge.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if(stripeErr){
        res.status(500).json(stripeErr)
      } else {
        res.status.json(stripeRes)
      }
    }
  )
})


module.exports = {
  stripeRouter,
}