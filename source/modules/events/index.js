import { Router } from 'express'
import getList from './controllers/getList'

const events = new Router()

events.get('/', getList)

export default events
