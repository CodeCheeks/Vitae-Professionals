import { create } from "./BaseService";

const http = create()


export const getElderData = (_id) => {
    return http.get(`/elders/${_id}`, { params: { id: _id } })
  }
  