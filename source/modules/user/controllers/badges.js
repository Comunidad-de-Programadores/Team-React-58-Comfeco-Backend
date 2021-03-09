import mongo from '../../../core/mongo'
import { badge } from '../../../core/models'

const activities = async (request, response) => {
  await mongo.connect()

  const badgesList = await badge.find({ userId: request.session._id }).lean()

  // const badgesList = badge.find({  })
  response.success({ badges: badgesList })
}

export default activities
