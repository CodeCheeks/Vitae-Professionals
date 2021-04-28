import { create } from "./BaseService";

const http = create()

export const deleteReports = (report_id) => {
  return http.delete('/deleteReport', { params: { id: report_id } })
}

export const getReports = (_id) => {
  return http.get('/reports', { params: { id: _id } })
}

export const getDataReport = (_id) => {
  return http.get(`/reports/${_id}`, { params: { id: _id } })
}

export const addReport = (body) => {
  return http.post('/reports', body)
}



