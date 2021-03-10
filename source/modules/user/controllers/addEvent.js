import events from '../../../core/eventsMock'
import { event } from '../../../core/models'
import mongo from '../../../core/mongo'

const addEvent = async (request, response) => {
  await mongo.connect()

  // check if user is already in the event
  const eventsUser = await event.find({
    userId: request.session._id,
    eventId: request.body.eventId
  }).lean()
  if (eventsUser.length) {
    return response.error({
      errorMessage: 'the user is already in the event'
    })
  }

  // eventId is not exist
  const eventsId = events.map(e => e.id.toString())
  if (!eventsId.includes(request.body.eventId)) {
    return response.error({
      errorMessage: 'event id is not exist'
    })
  }

  // save event
  await event.create({
    userId: request.session._id,
    eventId: request.body.eventId
  })

  response.success()
}

export default addEvent
