const orderData = require('./order.mongo')

// add order
async function saveOrder(order) {
  const newOrder = new orderData(order)
  try {  
    const savedOrder = await newOrder.save()
    return savedOrder
  }catch(err){
    console.log(err)
  }
}

// update order
async function updateOrder(order){
  try {  
    const updatedOrder = await orderData.findByIdAndUpdate(order.id, {
      $set: order,
     }, {new: true})
   
     return updatedOrder
  }catch(err){
    console.log(err)
  }
}

// get all orders
async function findAllOrders(){ 
  try {
    const orders =  await orderData.find()
    return orders
  } catch(err){
    console.log(err)
  }
}

// get user's orders
async function findOrdersByUserId(userId){  
   try {  
    const orders = await orderData.find({userId,})  
    return orders
  }catch(err){
    console.log(err)
  } 
}

// delete order
async function deleteOrder(id){
  try {  
    const deletedOrder = await orderData.findByIdAndDelete(id)   
     return deletedOrder
  }catch(err){
    console.log(err)
  }
}

// get income statistic
async function incomeStatistics(){
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth - 1))
  try {  
    const income = await orderData.aggregate([
      {$match: 
        {createdAt: 
          { $gte: previousMonth }
        }
      },
      {
        $project: 
          {
            month: {$month: "$createdAt"},
            sales: "$amount",
          },
      },
      {
        $group: {
          _id: "$month",
          total: {$sum: "$sales"},
        }
      }
    ])

    return income
  }catch(err){
    console.log(err)
  }
}


module.exports = {
  saveOrder,
  updateOrder,
  findAllOrders,
  findOrdersByUserId,
  deleteOrder,
  incomeStatistics  
}