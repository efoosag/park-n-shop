const express = require('express')
const { httpUpdateUser } = require('./user.controller')
const { verifyTokenAndAuthorization} = require('../../services/verifyToken')

const usersRouter = express.Router()

usersRouter.put('/:id', verifyTokenAndAuthorization, httpUpdateUser)  // update user

module.exports = {
  usersRouter,
}