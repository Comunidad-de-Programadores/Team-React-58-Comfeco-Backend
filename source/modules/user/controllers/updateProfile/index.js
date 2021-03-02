/* eslint-disable eqeqeq */
import mongo from '../../../../core/mongo'
import forEachObject from '../../../../helpers/forEachObject'
import { user } from 'core/models'

const updateProfile = async (request, response) => {
  const { _id, email } = request.session
  await mongo.connect()

  const secureData = {
    username: request.body.username,
    fullname: request.body.fullname,
    email: request.body.email,
    gender: request.body.gender,
    birthdate: request.body.birthdate,
    country: request.body.country,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
    github: request.body.github,
    facebook: request.body.facebook,
    linkedin: request.body.linkedin,
    twitter: request.body.twitter,
    biography: request.biography
  }

  // delete empties
  forEachObject(secureData, (value, key) => {
    if (!value) delete secureData[key]
  })

  // verify is user is available
  if (secureData.username) {
    const userByUsername = await user.findOne({ username: secureData.username }).lean()
    if (userByUsername && userByUsername._id != _id) return response.error({ errorMessage: 'the username is already registered' })
  }

  if (secureData.email) {
    const userByEmail = await user.findOne({ email: secureData.email }).lean()
    if (userByEmail && userByEmail._id != _id) return response.error({ errorMessage: 'the email is already registered' })
  }

  await user.updateOne({ email }, secureData)
  response.success()
}

export default updateProfile
