import security from 'core/security'

const authentication = async (request, response, next) => {
  // missing token
  if (!request.token) {
    return response.error({
      statusCode: 401,
      errorMessage: 'Unauthorized, missing token'
    })
  }

  // validateToken
  const { data, error } = await security.verify(request.token)

  // error token
  if (error) {
    return response.error({
      statusCode: 403,
      errorMessage: error
    })
  }

  // define session
  request.session = data
  next()
}

export default authentication
