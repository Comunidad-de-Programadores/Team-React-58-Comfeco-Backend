/* eslint-disable no-unused-vars */
import nodemailer from 'nodemailer'
import { EMAIL_SERVER } from '../secret'

export const send = async (email, token) => {
  const transporter = nodemailer.createTransport(EMAIL_SERVER)

  const info = await transporter.sendMail({
    from: 'ventas@asadoresdelnorte.com',
    to: email,
    subject: 'recuperar contraseña',
    html:
      `
        <h3>Recuperar contraseña<h3>
        <h4>Click aqui<h4>
        <a href="https://comunidad-fest.vercel.app/confirm-restore-password/${token}">https://comunidad-fest.vercel.app/confirm-restore-password/${token}</>
      `
  })
  return info
}

export default {
  send
}
