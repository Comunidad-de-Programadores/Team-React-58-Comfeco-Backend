import mongo from 'core/mongo'
import { user } from 'core/models'
import security from 'core/security'

const getUserInfo = async (request, response) => {
  await mongo.connect()
  const { email } = request.session

  // getUserInfo with email
  const resultWithEmail = await user.findOne({ email }).lean()
  if (resultWithEmail) {
    delete resultWithEmail.password
    delete resultWithEmail.__v
    return response.success({
      ...resultWithEmail,
      token: security.sign(resultWithEmail),
      group: '2'
    })
  }

  await mongo.disconnect()

  response.error({ errorMessage: 'usuario no encontrado' })
}

export default getUserInfo
