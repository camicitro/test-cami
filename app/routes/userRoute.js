const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/user', getUsers)

router.get('/user/id', getUser)

router.post('/', createUser)

router.patch('/', updateUser)

router.delete('/:id', deleteUser)



module.exports = router