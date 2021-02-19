import { Router } from 'express'
import confirmRestorePassword from './controllers/confirmRestorePassword'
import login from './controllers/login'
import register from './controllers/register'
import restorePassword from './controllers/restorePassword'

const user = new Router()

user.post('/login', login)
user.post('/register', register)
user.post('/restorepassword', restorePassword)
user.post('/confirmrestorepassword', confirmRestorePassword)

export default user
