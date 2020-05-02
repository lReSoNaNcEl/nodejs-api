const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const CONFIG = require('../config/config')
const User = require('../models/User')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: CONFIG.secretKey
}

module.exports = async passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await User.findById({_id: payload.id}).select('id email')
                user ? done(null, user) : done(null, false)
            } catch (e) {console.log(e)}
        })
    )
}