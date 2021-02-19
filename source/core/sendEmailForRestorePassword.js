import fetch from 'node-fetch'
import { SENGRID_API_KEY } from 'source/secret'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendEmailForRestorePassword = async (email, token) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email }],
        subject: 'Recover password'
      }],
      from: {
        email: 'armando.witideal@gmail.com',
        name: 'team-react-58-confeco'
      },
      content: [
        {
          type: 'text/html',
          value:
            `
              <h3>Recuperar contraseña<h3>
              <h4>Haz clieck en el siguente enlace<h4>
              <a href="https://comunidad-fest.vercel.app/create-new-password/${token}">https://comunidad-fest.vercel.app/create-new-password/${token}</>
            `
        }
      ]
    })
  })
}

export default sendEmailForRestorePassword
