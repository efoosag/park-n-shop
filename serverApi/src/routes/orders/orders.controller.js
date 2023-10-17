const { saveOrder, updateOrder, deleteOrder, findAllOrders, findOrdersByUserId, incomeStatistics } = require('../../models/order.model')

async function httpAddNewOrder(req, res){
  if(req.body.userId == null || req.body.products == null || req.body.amount == null || req.body.address == null){    
    return res.status(500).json('Missing required details')
  } else {
    console.log(req.body)     
    const savedOrder = await saveOrder(req.body)
    return res.status(200).json(savedOrder)
  }

}

async function httpUpdateOrder(req,res){
  const updateOrderDetails = {
    id: req.params.id,
    product: req.body,
  }

  const result = await updateOrder(updateOrderDetails) 
  
  return res.status(201).json(result);
}

async function httpDeleteOrder(req,res){
  
  const result = await deleteOrder(req.params.id) 
  
  return res.status(201).json(result);
}

async function httpGetAllOrders(req, res){  
  const results = await findAllOrders()
  return res.status(200).json(results)
}

async function httpGetUserOrders(req, res){
  const result = await findOrdersByUserId(req.params.userId)
  return res.status(200).json(result)
}

// get income statistics
async function httpGetIncomeStats(req,res){
  const result = await incomeStatistics()
  return res.status(200).json(result)
}

module.exports = {
  httpAddNewOrder,
  httpUpdateOrder,
  httpDeleteOrder,
  httpGetAllOrders,
  httpGetUserOrders,
  httpGetIncomeStats
}