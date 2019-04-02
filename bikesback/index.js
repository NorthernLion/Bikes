const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./utils/config')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')

//Router imports 

//const corporationRouter = require('./controllers/corporations')


mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)

//app use routes after this, might be added to seperate file if there are many of them.
//app.use('/api/corporations', corporationRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

app.use(middleware.error)

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}