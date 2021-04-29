import { create } from "./BaseService";

const http = create()

export const getCandidatesInfo = () => {
    return http.get('/employ')
}

export const deleteCandidate = (candidate_id) => {
    return http.delete('/deleteCandidate', { params: { id: candidate_id } })
  }