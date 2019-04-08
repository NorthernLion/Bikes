const express = require('express')
const app = express()

const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const config = require('./utils/config')
const middleware = require('./utils/middleware')
const authentication = require('./utils/authetication')

const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
  .then(() => {
    middleware.info('connected to MongoDB')
  })
  .catch((error) => {
    middleware.error('error connection to MongoDB:', error.message)
  })

mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)
app.use(authentication.extractToken)
app.use(authentication.authenticate)

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

const server = http.createServer(app)

app.get('*', (req, res) =>
  res.status(404).send({
    message: 'Not found.'
  })
)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

app.use(middleware.unknownEndpoint)

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}