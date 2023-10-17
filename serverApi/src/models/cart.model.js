const cartData = require('./cart.mongo')

// add cart
async function saveCart(cart) {
  try {  
    return await cartData.findOneAndUpdate({
      id: cart.id,
      },
        cart,
      {
        upsert: true,
      }
    )
  }catch(err){
    console.log(err)
  }
}

// update cart
async function updateCart(cart){
  try {  
    const updatedCart = await cartData.findByIdAndUpdate(cart.id, {
      $set: cart,
     }, {new: true})
   
     return updatedCart
  }catch(err){
    console.log(err)
  }
}

// get all carts
async function findAllCarts(){ 
  try {
    const carts =  await cartData.find()
    return carts
  } catch(err){
    console.log(err)
  }
}

// get user's cart
async function findCartByUserId(userId){  
   try {  
    const cart = await cartData.findOne({userId,})  
    return cart
  }catch(err){
    console.log(err)
  } 
}

// delete product
async function deleteCart(id){
  try {  
    const deletedCart = await cartData.findByIdAndDelete(id)   
     return deletedCart
  }catch(err){
    console.log(err)
  }
}


module.exports = {
  saveCart,
  updateCart,
  findAllCarts,
  findCartByUserId,
  deleteCart,  
}