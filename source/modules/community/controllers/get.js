import mongo from 'core/mongo'
import { community } from '../../../core/models'

const getList = async (request, response) => {
  await mongo.connect()

  const communitiesList = await community.find().lean()

  response.success({
    communities: communitiesList.map((currentCommunity) => {
      const { _id, ...otther } = currentCommunity
      delete otther.__v
      return { id: _id, ...otther }
    })
  })
}

export default getList
