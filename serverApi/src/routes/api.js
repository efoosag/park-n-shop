const express = require('express');

const api = express.Router();

const { authRouter } = require('./users/auth')
const { stripeRouter } = require('./stripe')
const { usersRouter } = require('./users/users.router')
const { productsRouter } = require('./products/products.router')
const { cartsRouter } = require('./carts/carts.router')
const { ordersRouter } = require('./orders/orders.router')

api.use('/', authRouter)
api.use('/payment', stripeRouter)
api.use('/users',usersRouter)
api.use('/products',productsRouter)
api.use('/orders',ordersRouter)
api.use('/carts',cartsRouter)

module.exports = api;