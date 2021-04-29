import { create } from "./BaseService";

const http = create()

//PROFESSIONALS

export const addUser = (body) => {
  return http.post('/professionals', body)
}

export const getUserInfo = () => {
  return http.get('/professionals/me')
}

export const getUserInfobyId = (_id) => {
  return http.get(`/professionals/${_id}`)
}

export const getUsersInfo = () => {
  return http.get('/professionals')
}

export const deleteUser = (user_id) => {
  return http.delete('/deleteProfessional', { params: { id: user_id } })
}

export const editUser = (_id,body) => {
  return http.put(`/editProfessional/${_id}`, body)
}

//ELDERS

export const getEldersInfo = () => {
  return http.get('/elders')
}


export const addElder = (body) => {
  return http.post('/addElder', body)
}
