import mongo from 'core/mongo'
import { user } from 'core/models'
import security from 'core/security'

import { getEmailError, getFullNameError, getPasswordError, getUserNameError } from 'helpers/validators'

const register = async (request, response) => {
  await mongo.connect()
  const { body } = request

  if (getUserNameError(body.username)) {
    const errorMessage = (getUserNameError(body.username))
    return response.error({ errorMessage })
  }
  if (getFullNameError(body.fullname)) {
    const errorMessage = (getFullNameError(body.fullname))
    return response.error({ errorMessage })
  }
  if (getFullNameError(body.fullname)) {
    const errorMessage = (getFullNameError(body.fullname))
    return response.error({ errorMessage })
  }
  if (getEmailError(body.email)) {
    const errorMessage = (getEmailError(body.email))
    return response.error({ errorMessage })
  }
  if (getPasswordError(body.password)) {
    const errorMessage = (getPasswordError(body.password))
    return response.error({ errorMessage })
  }
  if (body.password !== body.confirmpassword) {
    const errorMessage = 'Las contraseñas no coinciden'
    return response.error({ errorMessage })
  }

  delete body.confirmpassword

  // find username and email
  const existUserName = await user.findOne({ username: body.username })
  const existEmail = await user.findOne({ email: body.email })
  if (existUserName) return response.error({ errorMessage: 'Nombre de usuarion no disponible' })
  if (existEmail) return response.error({ errorMessage: 'El correo ya esta registrado' })

  const { _id } = await user.create({ ...body })
  const userCreated = await user.findById(_id).lean()
  delete userCreated.password
  delete userCreated.__v

  response.success({
    ...userCreated,
    token: security.sign(userCreated)
  })
}

export default register
