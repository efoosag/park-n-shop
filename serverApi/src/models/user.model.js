const userData = require('./user.mongo')
const CryptoJS = require('crypto-js')

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
  const { password, ...otherUserDetails} = loginUser._doc //return details without password

  return otherUserDetails
}

module.exports = {
  saveUser,
  loginUser,
}