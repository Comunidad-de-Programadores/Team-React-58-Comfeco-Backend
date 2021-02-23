
import mongo from '../../../core/mongo'
import { user } from 'core/models'

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

    response.success({
      message: 'user removed from community'
    })
  } catch (error) {
    response.error({ errorMessage: error.toString() })
  }
}

export default removeCommunity
