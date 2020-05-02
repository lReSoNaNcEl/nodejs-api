const User = require('../models/User')
const bcript = require('bcryptjs')
const jwt = require('jsonwebtoken')
const CONFIG = require('../config/config')

//Registration
module.exports.signup = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    })

    if (user)
        res.status(409).json({message: 'User was already created'})
    else {
        const user = new User({
            email: req.body.email,
            password: bcript.hashSync(req.body.password, bcript.genSaltSync(10))
        })

        await user.save()
        res.status(201).json(user)
    }

}

//Authorization
module.exports.login = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    })

    res.status(201).json(user)

    // if (user) {
    //     const validationPassword = await bcript.compareSync(req.body.password, user.password)
    //
    //     if (validationPassword) {
    //         const token = jwt.sign({
    //             id: user._id,
    //             email: user.email
    //         }, CONFIG.secretKey, {
    //             expiresIn: 60 * 60 * 12
    //         })
    //
    //         res.status(200).json({
    //             token: `Bearer ${token}`
    //         })
    //     }
    //     else
    //         res.status(400).json({message: 'Incorrect password'})
    // }
    // else
    //     res.status(404).json({message: `User don't register`})
}