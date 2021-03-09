import mongo from '../../../core/mongo'
import { activity } from '../../../core/models'

const activities = async (request, response) => {
  await mongo.connect()

  const activitiesList = await activity.find({ userId: request.session._id }).sort({ date: -1 }).limit(5).lean()

  // const activitiesList = activity.find({  })
  response.success({ activities: activitiesList })
}

export default activities
