const {upDatedUser} = require('../../models/user.model')

// Signup new user
async function httpUpdateUser(req,res){
  if(req.body.password)  {    
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SEC_KEY).toString()
  }
  const updateUserDetails = {
    id: req.params.id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  const result = await upDatedUser(updateUserDetails) 
  
  return res.status(201).json(result);

}

module.exports = {
  httpUpdateUser,
}