import events from '../../../core/eventsMock'

const getList = async (request, response) => {
  // await two seconds
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const eventList = events

  response.success({ events: eventList })
}

export default getList
