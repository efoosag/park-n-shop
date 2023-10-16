const jwt = require('jsonwebtoken')

const verifyToken = (req,res, next) => {
  const authHeader = req.headers.token
  if(authHeader) {
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SEC_KEY, (err, user) =>{
      if(err) {
        return res.status(403).json("Invalid Token")        
      }
      req.user = user
      next()
    })
  }else {
   return res.status(401).json('Failed Authentication')
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if(req.user.id === req.params.id || req.user.isAdmin){
      next()
    } else {      
      res.status(403).json('You are not Authorized to perform that task')
    }
  })
}

const verifyTokenAndIsAdmin = (req, res, next) => {
  verifyToken(req, res, () => {    
    if(req.user.isAdmin){
      next()
    } else {      
      res.status(403).json('You are not Authorized to perform that task')
    }
  })
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndIsAdmin,
}