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
  const upDateUser = await userData.findByIdAndUpdate(user.id, {
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
      id: loginUser._id,
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

async function deleteUser(id) {
  const deletedUser = await userData.findByIdAndDelete(id)
  return (`${deletedUser.username} have been deleted`)
}

async function findUserById(id) {  
  const user = await userData.findById(id)  
  const { password, ...others} = user._doc 
  return others
}

async function findAllusers(query){  
 const users = query ? await userData.find().sort({_id: -1}).limit(5) : await userData.find()
 return users
}

async function usersStatistics(){
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
  try {  
    const stat = await userData.aggregate([
      {$match: 
        {createdAt: 
          { $gte: lastYear }
        }
      },
      {
        $project: 
          {
            month: {$month: "$createdAt"}
          },
      },
      {
        $group: {
          _id: "$month",
          total: {$sum: 1},
        }
      }
    ])

    return stat
  }catch(err){
    console.log(err)
  }
}

module.exports = {
  signupUser,
  loginUser,
  upDatedUser,
  deleteUser,
  findUserById,
  findAllusers,
  usersStatistics, 
}