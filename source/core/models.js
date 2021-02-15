import { Schema, model } from 'mongoose'

export const user = model('user', new Schema({}, { strict: false }))
