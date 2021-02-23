import { Router } from 'express'
import getList from './controllers/get'

const community = new Router()

community.get('/', getList)

export default community
