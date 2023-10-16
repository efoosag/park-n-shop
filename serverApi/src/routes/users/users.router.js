const express = require('express')
const { httpUpdateUser, httpDeleteUser, httpGetUser, httpGetAllUsers, httpGetUsersStats } = require('./user.controller')
const { verifyTokenAndAuthorization, verifyTokenAndIsAdmin} = require('../../services/verifyToken')

const usersRouter = express.Router()

usersRouter.put('/:id', verifyTokenAndAuthorization, httpUpdateUser)  // update user

usersRouter.delete('/:id', verifyTokenAndAuthorization, httpDeleteUser)  // delete user

usersRouter.get('/', verifyTokenAndIsAdmin, httpGetAllUsers)  // get all users

usersRouter.get('/:id', verifyTokenAndIsAdmin, httpGetUser)  // get all users

usersRouter.get('/stats/monthly-users', verifyTokenAndIsAdmin, httpGetUsersStats)  // get all users statistics

module.exports = {
  usersRouter,  
}