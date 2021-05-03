
import { create } from "./BaseService";

const http = create()
//ELDERS

export const getEldersInfo = () => {
    return http.get('/elders')
  }

  export const getElderInfoById = (elder_id) => {
    return http.get(`/elders/${elder_id}`)
  }
  
  
export const addElder = (body) => {
    return http.post('/addElder', body)
}
  
export const deleteElder = (elder_id) => {
    return http.delete('/deleteElder', { params: { id: elder_id } })
}

export const editElder = (_id, body) => {
    return http.put(`/editElder/${_id}`, body)
  }
  
export const elderImages = (body, elder_id) => {
  console.log(body)
    return http.put(`/elderImages/${elder_id}`, body)
  }


  