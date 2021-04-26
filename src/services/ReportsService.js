import { create } from "./BaseService";

const http = create()

export const deleteReports = (report_id) => {
  return http.delete('/deleteReport', { body: { id: report_id } })
}

