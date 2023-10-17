const { saveCart, updateCart, deleteCart, findAllCarts, findCartByUserId } = require('../../models/cart.model')

async function httpAddNewCart(req, res){
  if(req.body.userId == null || req.body.products == null){    
    return res.status(500).json('Missing required details')
  } else {     
    const savedCart = await saveCart(req.body)
    return res.status(200).json(savedCart)
  }

}

async function httpUpdateCart(req,res){
  const updateCartDetails = {
    userId: req.params.id,
    products: req.body.products,
  }

  const result = await updateCart(updateCartDetails) 
  
  return res.status(201).json(result);
}

async function httpDeleteCart(req,res){
  
  const result = await deleteCart(req.params.id) 
  
  return res.status(201).json(result);
}

async function httpGetAllCarts(req, res){
  const query = [req.query.new, req.query.category]
  const results = await findAllCarts(query)
  return res.status(200).json(results)
}

async function httpGetUserCart(req, res){
  const result = await findCartByUserId(req.params.userId)
  return res.status(200).json(result)
}

module.exports = {
  httpAddNewCart,
  httpUpdateCart,
  httpDeleteCart,
  httpGetAllCarts,
  httpGetUserCart,
}