import { event } from '../../../core/models'
import mongo from '../../../core/mongo'
import eventsMock from '../../../core/eventsMock'

const getEvents = async (request, response) => {
  await mongo.connect()

  let eventsList = await event.find({ userId: request.session._id }).lean()
  eventsList = eventsList.map(({ eventId }) => {
    return eventsMock.find((eMock) => eMock.id === eventId)
  })

  response.success({
    events: eventsList
  })
}

export default getEvents
