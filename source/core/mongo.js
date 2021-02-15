import mongoose from 'mongoose'
import { mongoseUri } from '../config'

const connect = async () => {
  try {
    await mongoose.connect(mongoseUri, { useNewUrlParser: true, useUnifiedTopology: true })
    return true
  } catch (error) {
    return false
  }
}

const disconnect = () => {
  try {
    return mongoose.connection.close()
  } catch (error) {
    return false
  }
}

export default {
  connect,
  disconnect
}
