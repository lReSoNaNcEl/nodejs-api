const express = require('express')
const app = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const cors = require('cors')
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
// app.use(cors({
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//     optionsSuccessStatus: 200
// }))
app.all((req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, HEAD");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = {
    auth: require('./routes/auth'),
    photo: require('./routes/photo'),
}

app.use('/api/auth', routes.auth)
app.use('/api/photo', routes.photo)

module.exports = app