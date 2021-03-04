import mongo from 'core/mongo'
import { user } from 'core/models'
import security from 'core/security'

const login = async (request, response) => {
  await mongo.connect()
  const { body } = request

  // login with email
  const resultWithEmail = await user.findOne({ email: body.usernameoremail, password: body.password }).lean()
  if (resultWithEmail) {
    delete resultWithEmail.password
    delete resultWithEmail.__v
    const dataToSend = {
      ...resultWithEmail,
      token: security.sign(resultWithEmail)
    }
    // response.cookie('session', dataToSend, { maxAge: 24 * 60 * 60 * 7 })
    return response.success(dataToSend)
  }

  // login with username
  const resultWitUserName = await user.findOne({ username: body.usernameoremail, password: body.password }).lean()
  if (resultWitUserName) {
    delete resultWitUserName.password
    delete resultWitUserName.__v
    const dataToSend = {
      ...resultWitUserName,
      token: security.sign(resultWitUserName)
    }
    // response.cookie('session', dataToSend, { maxAge: 24 * 60 * 60 * 7 })
    return response.success(dataToSend)
  }

  await mongo.disconnect()
  response.error({ errorMessage: 'credenciales incorrectos' })
}

export default login
