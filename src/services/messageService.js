import { create } from "./BaseService";

const http = create()


export const addMessage = (receptor_id, body) => {
    return http.post(`/messages/${receptor_id}`, body)
  }
  

export const receivedMessages = (professional_id) => {
    return http.get(`/receivedMessages/${professional_id}`)
  }
  
export const sentMessages = (professional_id) => {
    return http.get(`/sentMessages/${professional_id}`)
  }
  
export const deleteMessage = (message_id) => {
  return http.delete(`/messages/${message_id}` )
}
  
  