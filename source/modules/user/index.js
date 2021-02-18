import { Router } from 'express'
import login from './controllers/login'
import register from './controllers/register'
import restorePassword from './controllers/restorePassword'

const user = new Router()

user.post('/login', login)
user.post('/register', register)
user.post('/restorepassword', restorePassword)

export default user
