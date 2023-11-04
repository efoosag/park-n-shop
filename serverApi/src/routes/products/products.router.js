const express = require('express')
const { verifyTokenAndIsAdmin, verifyTokenAndAuthorization} = require('../../services/verifyToken')

const { httpAddNewProduct, httpUpdateProduct, httpDeleteProduct, httpGetAllProducts, httpGetProduct } = require('./products.controller')

const productsRouter = express.Router()

productsRouter.post('/', verifyTokenAndIsAdmin, httpAddNewProduct) // add new product
productsRouter.put('/:id', verifyTokenAndIsAdmin, httpUpdateProduct) // update product
productsRouter.delete('/:id', verifyTokenAndIsAdmin, httpDeleteProduct) // delete product
productsRouter.get('/', httpGetAllProducts) // get all product
productsRouter.get('/:id', httpGetProduct) // get unique product

module.exports = {
  productsRouter,
}