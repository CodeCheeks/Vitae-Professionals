import { create } from "./BaseService";

const http = create()

export const getUserInfo = () => {
  return http.get('/professionals/me')
}

export const getEldersInfo = () => {
  return http.get('/elders')
}


export const addElder = (body) => {
  return http.post('/addElder', body)
}
