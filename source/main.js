import { Router } from 'express'
import { json, urlencoded } from 'body-parser'
import response from './middlewares/response'
import TokenExtract from 'express-bearer-token'
import cors from 'cors'

// modules
import user from './modules/user'
import community from './modules/community'
import groups from './modules/group'

const router = Router()

// define middlewares
router.use(cors())
router.use(json())
router.use(urlencoded({ extended: false }))
router.use(response)
router.use(TokenExtract())

// define modules
router.use('/user', user)
router.use('/community', community)
router.use('/group', groups)

// 404 error handler
router.use((request, response) => {
  response.error({
    statusCode: 404,
    path: request.url,
    method: request.method,
    errorMessage: 'path not found'
  })
})

// general error handler
router.use((error, request, response, next) => {
  if (error) console.log(error)
  response.status(500)
  response.json({ status: 'error', errorMessage: 'internal server error' })
  response.end()
})

export default router
