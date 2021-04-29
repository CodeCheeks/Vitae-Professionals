import { create } from "./BaseService";

const http = create()

export const getDataActivity = (activity_id) => {
    return http.get(`/activity/${activity_id}`, { params: { id: activity_id } })
}

export const deleteActivity = (activity_id) => {
  return http.delete(`/activity/${activity_id}`, { params: { id: activity_id } })
}

export const getActivities = (_id) => {
  return http.get(`/activities/${_id}`, { params: { id: _id } })
}

export const editActivity = (activity_id, body) => {
  return http.put(`/activity/${activity_id}`, body )
}


export const addActivity = (body) => {
  return http.post('/activities', body)
}


export const deleteParticipants = (participant_id) => {
    return http.delete(`/participants/${participant_id}`, { params: { id: participant_id } })
  }
  


