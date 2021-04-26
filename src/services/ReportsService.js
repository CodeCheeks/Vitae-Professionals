import { create } from "./BaseService";

const http = create()

export const deleteReports = (report_id) => {
  return http.delete('/deleteReport', { params: { id: report_id } })
}

