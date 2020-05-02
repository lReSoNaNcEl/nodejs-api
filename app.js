const express = require('express')
const app = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')

const CONFIG = require('./config/config')

mongoose.connect(CONFIG.connectionURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(db => console.log('Successful connection to Database'))
    .catch(err => console.log('Error'))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use('/photos', express.static('photos'))
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = {
    auth: require('./routes/auth'),
    photo: require('./routes/photo'),
}

app.use('/api/auth', routes.auth)
app.use('/api/photo', routes.photo)

module.exports = app