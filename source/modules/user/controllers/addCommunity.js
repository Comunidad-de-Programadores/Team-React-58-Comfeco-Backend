
import mongo from '../../../core/mongo'
import { community, user } from 'core/models'

const AddCominity = async (request, response) => {
  try {
    await mongo.connect()
    const { _id: userId } = request.session
    const { communityId } = request.body

    // check communityId exist
    const communityExist = await community.findById(communityId).lean()
    if (!communityExist) {
      return response.error({
        errorMessage: 'Community id not found'
      })
    }

    const { communities = [] } = await user.findById(userId).lean()
    if (communities.includes(communityId)) {
      return response.error({
        errorMessage: 'the user is already within the community'
      })
    }

    // set idCommunity into user
    const composedCommunities = [...communities, communityId]
    await user.updateOne({ _id: userId }, { communities: composedCommunities })
    response.success({
      message: 'User added to the community'
    })
  } catch (error) {
    response.error({ errorMessage: error.toString() })
  }
}

export default AddCominity
