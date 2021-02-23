import { Schema, model } from 'mongoose'

export const user = model('user', new Schema({}, { strict: false }))
export const community = model('community', new Schema({}, { strict: false }))
