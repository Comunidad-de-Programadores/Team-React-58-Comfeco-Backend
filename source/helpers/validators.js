export const getPasswordError = (text = '') => {
  if (text.toString().length < 8) return 'La contraseña debe tener minimo 8 caracteres'
  return false
}

export const getEmailError = (text = '') => {
  const isValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(text)
  if (!isValid) return 'El correo no es valido'
  return false
}

export const getUserNameError = (text = '') => {
  const isValid = /^.{4,12}$/.test(text)
  if (!isValid) return 'El nombre de usuario debe tener entre 4 y 12 caracteres'
  return false
}

export const getFullNameError = (fullname = '') => {
  const isValid = /^.{8,50}$/.test(fullname)
  if (!isValid) return 'Nombre completo no valido'
  return false
}

export default {
  getPasswordError,
  getEmailError,
  getUserNameError,
  getFullNameError
}
