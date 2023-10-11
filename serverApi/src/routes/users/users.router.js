const express = require('express')

const usersRouter = express.Router()

usersRouter.get('/', (req,res) => {
  res.send('user routes is now working')
})

module.exports = {
  usersRouter,
}