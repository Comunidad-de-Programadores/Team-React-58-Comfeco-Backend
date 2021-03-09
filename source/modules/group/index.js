import { Router } from 'express'
import getList from './controllers/getList'

const groups = new Router()

groups.get('/', getList)

export default groups
