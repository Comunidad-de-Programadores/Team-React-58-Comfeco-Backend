import { event } from '../../../core/models'
import mongo from '../../../core/mongo'

const removeEvent = async (request, response) => {
  await mongo.connect()

  await event.deleteMany({
    userId: request.session._id,
    eventId: request.body.eventId
  })

  response.success()
}

export default removeEvent
