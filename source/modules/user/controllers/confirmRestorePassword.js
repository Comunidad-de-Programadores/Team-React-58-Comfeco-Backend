import { verify } from 'core/security'
import { user } from '../../../core/models'
import mongose from 'core/mongo'

const confirmRestorePassword = async (request, response) => {
  await mongose.connect()
  const { token, password } = request.body
  const decoded = await verify(token)

  if (decoded.error) {
    return response.error({ errorMessage: 'El token no es válido' })
  }

  const status = await user.updateOne({ email: decoded.data.email }, { password })
  console.log('status', status)

  await mongose.disconnect()
  response.success()
}

export default confirmRestorePassword
