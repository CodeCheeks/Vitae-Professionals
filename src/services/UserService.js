import { create } from "./BaseService";

const http = create()

//PROFESSIONALS
export const getUserInfo = () => {
  return http.get('/professionals/me')
}

export const getUsersInfo = () => {
  return http.get('/professionals')
}

export const deleteUser = (user_id) => {
  return http.delete('/deleteProfessional', { params: { id: user_id } })
}

export const editUser = (body) => {
  return http.put('/editProfessional', body)
}

//ELDERS

export const getEldersInfo = () => {
  return http.get('/elders')
}


export const addElder = (body) => {
  return http.post('/addElder', body)
}
