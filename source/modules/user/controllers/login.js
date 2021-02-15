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
    return response.success({
      ...resultWithEmail,
      token: security.sign(resultWithEmail)
    })
  }

  // login with username
  const resultWitUserName = await user.findOne({ username: body.usernameoremail, password: body.password }).lean()
  if (resultWitUserName) {
    delete resultWitUserName.password
    delete resultWitUserName.__v
    return response.success({
      ...resultWitUserName,
      token: security.sign(resultWitUserName)
    })
  }

  await mongo.disconnect()

  response.error({ errorMessage: 'credenciales incorrectos' })
}

export default login
