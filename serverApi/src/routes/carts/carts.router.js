const express = require('express')
const { verifyToken, verifyTokenAndIsAdmin, verifyTokenAndAuthorization} = require('../../services/verifyToken')

const { httpAddNewCart, httpUpdateCart, httpDeleteCart, httpGetAllCarts, httpGetUserCart } = require('./carts.controller')

const cartsRouter = express.Router()

cartsRouter.post('/', verifyToken, httpAddNewCart) // add new cart
cartsRouter.put('/:id', verifyToken, httpUpdateCart) // update cart
cartsRouter.delete('/:id', verifyTokenAndAuthorization, httpDeleteCart) // delete cart
cartsRouter.get('/', verifyTokenAndIsAdmin, httpGetAllCarts) // get all carts
cartsRouter.get('/:userId', verifyTokenAndAuthorization, httpGetUserCart) // get user's cart

module.exports = {
  cartsRouter,
}