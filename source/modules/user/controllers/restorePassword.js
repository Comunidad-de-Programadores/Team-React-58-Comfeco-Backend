import { user } from '../../../core/models'
import { sign } from '../../../core/security'
import { send } from '../../../core/email'
import mongo from 'core/mongo'

const restorePassword = async (request, response) => {
  await mongo.connect()
  const { email } = request.body

  const currentUser = await user.findOne({ email }).lean()

  // response with error is userd not exist
  if (!currentUser) {
    return response.error({ errorMessage: 'Correo electronico no encontrado' })
  }
  await mongo.disconnect()
  const token = sign({ email })
  await send(email, token)

  response.success()
}

export default restorePassword
