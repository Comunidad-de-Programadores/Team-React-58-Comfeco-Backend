/* eslint-disable eqeqeq */
import mongo from '../../../core/mongo'
// import forEachObject from '../../../helpers/forEachObject'
import { activity, user, badge } from 'core/models'
import badgesMock from '../../../core/badgesMock'

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
    github: request.body.github,
    facebook: request.body.facebook,
    linkedin: request.body.linkedin,
    twitter: request.body.twitter,
    biography: request.body.biography,
    knowledgeArea: request.body.knowledgeArea
  }

  if (secureData.birthdate) {
    secureData.birthdate = new Date(secureData.birthdate)
  }

  // delete empties
  // forEachObject(secureData, (value, key) => {
  //   if (!value) delete secureData[key]
  // })

  // verify is user is available
  if (secureData.username) {
    const userByUsername = await user.findOne({ username: secureData.username }).lean()
    if (userByUsername && userByUsername._id != _id) return response.error({ errorMessage: 'the username is already registered' })
  }

  if (secureData.email) {
    const userByEmail = await user.findOne({ email: secureData.email }).lean()
    if (userByEmail && userByEmail._id != _id) return response.error({ errorMessage: 'the email is already registered' })
  }

  // update profile
  await user.updateOne({ email }, secureData)

  // set at activity
  await activity.create({
    userId: _id,
    date: new Date(),
    message: 'Actualizaste los datos de tu perfil'
  })

  // set badge if not exist
  const currentBadges = await badge.find({ userId: _id }).lean()
  if (!currentBadges.some(badge => badge.name === 'Sociable')) {
    console.log('setting socieble badge')
    await badge.create({
      userId: _id,
      ...badgesMock.find(badge => badge.name === 'Sociable')
    })
    await activity.create({
      userId: _id,
      date: new Date(),
      message: 'Obtuviste insignia sociable'
    })
  }
  response.success()
}

export default updateProfile
