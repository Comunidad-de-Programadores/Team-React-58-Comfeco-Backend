import { verify } from 'core/security'
import { activity, user } from '../../../core/models'
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

  // set activity
  const userdata = await user.findOne({ email: decoded.data.email }).lean()
  console.log('userdata', userdata)
  await mongose.connect()
  await activity.create({
    userId: userdata._id,
    date: new Date(),
    message: 'Cambiaste de contraseña a traves de link enviado por email'
  })

  await mongose.disconnect()
  response.success()
}

export default confirmRestorePassword
