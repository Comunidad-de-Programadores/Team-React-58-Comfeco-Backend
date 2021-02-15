import { Router } from 'express'
import login from './controllers/login'
import register from './controllers/register'

const user = new Router()

user.post('/login', login)
user.post('/register', register)

export default user
