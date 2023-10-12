const express = require('express')
const { httpPostSignup, httpLoginUser } = require('./auth.controller')
const authRouter = express.Router()


authRouter.post('/signup', httpPostSignup) // signup new user
authRouter.get('/login', httpLoginUser) // login user

module.exports = {
  authRouter,
}