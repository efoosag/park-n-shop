const userData = require('./user.mongo')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

async function saveUser(user) {
  return await userData.findOneAndUpdate({
    username: user.username,
    },
      user,
    {
      upsert: true,
    }
  )
}

async function upDatedUser(user) {
  const upDateUser = await userData.findOneAndUpdate(user.email, {
   $set: user,
  }, {new: true})

  return upDateUser
}

async function signupUser(user) {  
  await saveUser(user)
}

async function loginUser(user){
  const loginUser = await userData.findOne({
    username: user.username
  }) 

  if (!loginUser){
    throw new Error('Matching Username Not Found');
  }

  const hashedPassword = CryptoJS.AES.decrypt(loginUser.password, process.env.SEC_KEY).toString(CryptoJS.enc.Utf8)

  if (hashedPassword !== user.password ) {
    throw new Error('Wrong Password!');
  }

  const accesstoken = jwt.sign(
    {
      id: loginUser.id,
      isAdmin: loginUser.isAdmin,
    },
    process.env.JWT_SEC_KEY,
    {
      expiresIn: "3d"
    }
  )
  const { password, ...otherUserDetails} = loginUser._doc //return details without password

  return {...otherUserDetails, accesstoken}
}

module.exports = {
  signupUser,
  loginUser,
  upDatedUser
}