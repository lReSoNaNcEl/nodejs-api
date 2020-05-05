const express = require('express')
const app = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
// const timeout = require('connect-timeout')

const CONFIG = require('./config/config')

mongoose.connect(CONFIG.connectionURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(db => console.log('Successful connection to Database'))
    .catch(err => console.log(err))

app.use(passport.initialize())
require('./middleware/passport')(passport)

// app.use(timeout('5s'))
app.use('/photos', express.static('photos'))
app.use(morgan('dev'))

app.use(cors())

// app.options('*', cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.all('*', (req, res) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods','PUT,GET,DELETE,POST,PATCH')
//     res.header('Access-Control-Allow-Credentials', true)
//     res.header('Access-Control-Allow-Headers','X-Requested-With,content-type,Origin,Accept,Authorization')
// })

const routes = {
    auth: require('./routes/auth'),
    photo: require('./routes/photo'),
}

app.use('/api/auth', routes.auth)
app.use('/api/photo', routes.photo)

module.exports = app