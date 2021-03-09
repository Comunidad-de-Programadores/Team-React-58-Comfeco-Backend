import { Router } from 'express'
import getList from './controllers/getList'

const badges = new Router()

badges.get('/', getList)

export default badges
