import badgesMock from '../../../core/badgesMock'

const getList = async (request, response) => {
  response.success({ badges: badgesMock })
}

export default getList
