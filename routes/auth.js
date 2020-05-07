const express = require('express')
const router = express.Router()

const controller = require('../controllers/auth')

//@Registration
router.post('/signup', controller.signup)

//@Login
router.post('/login', controller.login)


module.exports = router

