
import mongo from '../../../core/mongo'
import { activity, community, user } from 'core/models'

const removeCommunity = async (request, response) => {
  try {
    await mongo.connect()
    const { _id: userId } = request.session
    const { communityId } = request.body

    const { communities = [] } = await user.findById(userId).lean()
    if (!communities.includes(communityId)) {
      return response.error({ errorMessage: 'User is not into community' })
    }

    const comminitiesFiltered = communities.filter((currentCommunity) => currentCommunity !== communityId)
    await user.updateOne({ _id: userId }, { communities: comminitiesFiltered })

    // set activity
    try {
      const { name: communityName } = await community.findById(communityId).lean()
      activity.create({
        date: new Date(),
        message: `Abandonaste la comunidad "${communityName}"`,
        userId
      })
    } catch (error) {
      console.error(error)
    }

    response.success({
      message: 'user removed from community'
    })
  } catch (error) {
    response.error({ errorMessage: error.toString() })
  }
}

export default removeCommunity
