const express = require('express')
const { verifyToken, verifyTokenAndIsAdmin, verifyTokenAndAuthorization} = require('../../services/verifyToken')

const { httpAddNewOrder, httpUpdateOrder, httpDeleteOrder, httpGetAllOrders, httpGetUserOrders, httpGetIncomeStats } = require('./orders.controller')

const ordersRouter = express.Router()

ordersRouter.post('/', verifyToken, httpAddNewOrder) // add new order

ordersRouter.put('/:id', verifyTokenAndIsAdmin, httpUpdateOrder) // update order

ordersRouter.delete('/:id', verifyTokenAndIsAdmin, httpDeleteOrder) // delete order

ordersRouter.get('/', verifyTokenAndIsAdmin, httpGetAllOrders) // get all orders

ordersRouter.get('/:userId', verifyTokenAndAuthorization, httpGetUserOrders) // get user's order

ordersRouter.get('/stats/monthly-income', verifyTokenAndIsAdmin, httpGetIncomeStats)  // get all users statistics


module.exports = {
  ordersRouter,
}