import jsonwebtoken from 'jsonwebtoken'
import { jwt } from '../config'

/**
 * @param {String} accessToken
 * @return {Boolean | String} false or token payload
 */
export function verify (accessToken) {
  return new Promise(resolve => {
    jsonwebtoken.verify(accessToken, jwt.secret, (error, data) => {
      if (error) resolve({ error: error.message })
      else resolve({ data, error: false })
    })
  })
}

/**
 * encode data into token
 * @param {{}} data data to encode
 */
export function sign (data) {
  const accessToken = jsonwebtoken.sign(data, jwt.secret)
  return accessToken
}

export default {
  verify,
  sign
}
