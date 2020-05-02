const express = require('express')
const router = express.Router()
const passport = require('passport')
const uploader = require('../middleware/uploadImage')

const controller = require('../controllers/photo')

//@GetAll
router.get('/', passport.authenticate('jwt', {session: false,}), controller.getAll)

//@GetById
router.get('/:id', passport.authenticate('jwt', {session: false,}), controller.getBydId)

//@Create
router.post('/', passport.authenticate('jwt', {session: false,}), uploader.single('photo'), controller.create)

//@Update
router.patch('/:id', passport.authenticate('jwt', {session: false,}), uploader.single('photo'), controller.update)

//@Delete
router.delete('/:id', passport.authenticate('jwt', {session: false,}), controller.delete)

module.exports = router