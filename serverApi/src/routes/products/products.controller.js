const { saveProduct, updateProduct, deleteProduct, findAllProducts, findProductById } = require('../../models/product.model')

async function httpAddNewProduct(req, res){
  if(req.body.title == null || req.body.desc == null || req.body.price == null || req.body.img == null || req.body.color == null || req.body.size == null){    
    return res.status(500).json('Missing required details')
  } else {     
    const savedProduct = await saveProduct(req.body)
    return res.status(200).json(savedProduct)
  }

}

async function httpUpdateProduct(req,res){
  const updateProductDetails = {
    id: req.params.id,
    product: req.body,
  }

  const result = await updateProduct(updateProductDetails) 
  
  return res.status(201).json(result);
}

async function httpDeleteProduct(req,res){
  
  const result = await deleteProduct(req.params.id) 
  
  return res.status(201).json(result);
}

async function httpGetAllProducts(req, res){
  const query = [req.query.new, req.query.category]
  const results = await findAllProducts(query)
  return res.status(200).json(results)
}

async function httpGetProduct(req, res){
  const result = await findProductById(req.params.id)
  return res.status(200).json(result)
}

module.exports = {
  httpAddNewProduct,
  httpUpdateProduct,
  httpDeleteProduct,
  httpGetAllProducts,
  httpGetProduct
}