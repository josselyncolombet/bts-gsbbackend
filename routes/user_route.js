const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controller')

router.post('/', userController.createUser)
router.get('/', userController.getUsers)
router.get('/:email', userController.getUserByEmail)
router.put('/', userController.updateUser)
router.delete('/', userController.deleteUser)

module.exports = router