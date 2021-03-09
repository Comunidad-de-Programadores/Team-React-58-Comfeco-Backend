import { Router } from 'express'
import authentication from '../../middlewares/authentication'
import activities from './controllers/activity'
import AddCominity from './controllers/addCommunity'
import confirmRestorePassword from './controllers/confirmRestorePassword'
import getUserInfo from './controllers/getUserInfo'
import login from './controllers/login'
import register from './controllers/register'
import removeCommunity from './controllers/removeCommunity'
import restorePassword from './controllers/restorePassword'
import updateProfile from './controllers/updateProfile'
import badges from './controllers/badges'

const user = new Router()

user.post('/login', login)
user.get('/activity', authentication, activities)
user.get('/badge', authentication, badges)
user.post('/register', register)
user.post('/restorepassword', restorePassword)
user.post('/confirmrestorepassword', confirmRestorePassword)
user.post('/community', authentication, AddCominity)
user.delete('/community', authentication, removeCommunity)
user.patch('/', authentication, updateProfile)
user.get('/', authentication, getUserInfo)

export default user
