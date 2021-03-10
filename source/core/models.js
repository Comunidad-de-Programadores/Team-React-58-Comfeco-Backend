import { Schema, model } from 'mongoose'

export const user = model('user', new Schema({}, { strict: false }))
export const community = model('community', new Schema({}, { strict: false }))
export const activity = model('activity', new Schema({}, { strict: false }))
export const badge = model('badge', new Schema({}, { strict: false }))
export const event = model('event', new Schema({}, { strict: false }))
