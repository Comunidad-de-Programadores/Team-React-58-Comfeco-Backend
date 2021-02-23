import { Router } from 'express'
import authentication from '../../middlewares/authentication'
import AddCominity from './controllers/addCommunity'
import confirmRestorePassword from './controllers/confirmRestorePassword'
import login from './controllers/login'
import register from './controllers/register'
import restorePassword from './controllers/restorePassword'

const user = new Router()

user.post('/login', login)
user.post('/register', register)
user.post('/restorepassword', restorePassword)
user.post('/confirmrestorepassword', confirmRestorePassword)
user.post('/add-community', authentication, AddCominity)

export default user
