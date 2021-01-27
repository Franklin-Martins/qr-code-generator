const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const userController = new UserController()

routes.get('/', userController.index)
routes.get('/generated-user', userController.show)
routes.post('/generated-user', userController.create)


module.exports = routes