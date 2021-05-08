let accessToken = window.sessionStorage.getItem('token') || null

export const getAccessToken = () => accessToken

export const setAccessToken = token => {
  window.sessionStorage.setItem('token', token)
  accessToken = token
}

export const logout = () => {
  window.sessionStorage.removeItem('token')
  window.location.assign('/')
}