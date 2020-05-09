const express = require('express')
const app = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')

const CONFIG = require('./config/config')

mongoose.connect(CONFIG.connectionURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(db => console.log('Successful connection to Database'))
    .catch(err => console.log(err))

app.use(passport.initialize())
require('./middleware/passport')(passport)

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

app.use('/photos', express.static('photos'))

// if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/'))
    app.get('*', (req, res) => {
        res.status(200).sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
    })
// }

app.listen(CONFIG.port, (req, res) => console.log(`Server listening to ${CONFIG.port} port`))

module.exports = app