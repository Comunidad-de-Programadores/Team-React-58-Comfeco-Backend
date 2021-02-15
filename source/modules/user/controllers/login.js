import { admin } from 'core/models'
import mongo from 'core/mongo'
import { sign } from 'core/security'

const login = async (request, response) => {
  await mongo.connect()

  const { email, password } = request.body
  const data = await admin.findOne({ password, email }).lean()
  await mongo.disconnect()

  if (!data) return response.error({ errorMessage: 'email or password was wrong' })

  const responseObject = {
    name: data.name,
    lastname: data.lastname,
    email: data.email,
    id: data._id
  }

  const token = sign(responseObject)

  response.success({ user: { ...responseObject, token } })
}

export default login
