const jwt = require('jsonwebtoken')

const authenticate = (request, response, next) => {
  const excludedPaths = ['/api/login', '/api']
  if (!excludedPaths.includes(request.path)) {
    try {
      let decoded = jwt.verify(request.token, process.env.SECRET)
        ; (request.decoded = decoded), (request.authenticated = { success: true, error: '' })
    } catch (e) {
      request.authenticated = { success: false, error: 'token verification failed' }
    }
  }

  next()
}

const extractToken = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }
  next()
}

module.exports = {
  authenticate,
  extractToken
}