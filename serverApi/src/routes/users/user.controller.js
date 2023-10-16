const {upDatedUser, findUserById, findAllusers, usersStatistics} = require('../../models/user.model');

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

//Delete User
async function httpDeleteUser(req, res) {
  const result = await deleteUser(req.params.id)
  return res.status(200).json(result)
}

//Get All Users 
async function httpGetAllUsers(req, res) {
  const query = req.query.new
  const results = await findAllusers(query)
  return res.status(200).json(results)
}

//Get User by Id 
async function httpGetUser(req, res) {
  const result = await findUserById(req.params.id)
  return res.status(200).json(result)
}

//Get users statistics
async function httpGetUsersStats(req, res) {  
  const result = await usersStatistics()
  return res.status(200).json(result)
}

module.exports = {
  httpUpdateUser,
  httpDeleteUser,
  httpGetUser,
  httpGetAllUsers,
  httpGetUsersStats
}