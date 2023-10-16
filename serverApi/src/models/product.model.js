const productData = require('./product.mongo')

// add product
async function saveProduct(product) {
  try {  
    return await productData.findOneAndUpdate({
      title: product.title,
      },
        product,
      {
        upsert: true,
      }
    )
  }catch(err){
    console.log(err)
  }
}

// update product
async function updateProduct(product){
  try {  
    const updatedProduct = await productData.findByIdAndUpdate(product.id, {
      $set: product.product,
     }, {new: true})
   
     return updatedProduct
  }catch(err){
    console.log(err)
  }
}

// get all products
async function findAllProducts(query){ 
  let products 
  try {     
    if(query[0]){
      products = await productData.find().sort({createdAt: -1}).limit(1)
    }else if (query[1]){
      products = await productData.find({categories: {$in: [query[1]]}}).sort({_id: -1}).limit(5)
    }else{
      products =  await productData.find()
    }

    return products
  }catch(err){
    console.log(err)
  }
}

// get unigue product
async function findProductById(id){  
   try {  
    const product = await productData.findById(id)  
    return product
  }catch(err){
    console.log(err)
  } 
}

// delete product
async function deleteProduct(id){
  try {  
    const deletedProduct = await productData.findByIdAndDelete(id)   
     return deletedProduct
  }catch(err){
    console.log(err)
  }
}


module.exports = {
  saveProduct,
  updateProduct,
  findAllProducts,
  findProductById,
  deleteProduct,
  
}