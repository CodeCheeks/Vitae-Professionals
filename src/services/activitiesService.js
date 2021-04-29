import { create } from "./BaseService";

const http = create()

export const deleteActivity = (activity_id) => {
  return http.delete(`/activity/${activity_id}`, { params: { id: activity_id } })
}

export const getActivities = (_id) => {
  return http.get('/activities', { params: { id: _id } })
}

export const editActivity = (_id, body) => {
  return http.put(`/editReport/${_id}`, body )
}


export const getDataActivity = (_id) => {
  return http.get(`/activity/${_id}`, { params: { id: _id } })
}

export const addActivity = (body) => {
  return http.post('/activity', body)
}



