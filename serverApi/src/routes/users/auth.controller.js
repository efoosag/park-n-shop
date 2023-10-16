const { signupUser, loginUser } = require('../../models/user.model')
const CryptoJS = require('crypto-js')

// Signup new user
async function httpPostSignup(req,res){
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SEC_KEY).toString()
  }
  if(!newUser.username || !newUser.email || !newUser.password) {   

    return res.status(400).json({
      error: 'Missing Required Signup Required Property',
    });
  }

  await signupUser(newUser);

  return res.status(201).json(newUser);
}

//Login user
async function httpLoginUser(req,res) {
  const user = {
    username: req.body.username, 
    password: req.body.password  
  }

  if (!user.password || !user.username ) {
    return res.status(401).json('Missing Credentials')
  }

  const verifiedUser = await loginUser(user)
   
  return res.status(201).json(verifiedUser)
}

module.exports = {
  httpPostSignup,
  httpLoginUser
}