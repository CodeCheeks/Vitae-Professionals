
import React, { useEffect, useState } from 'react';
import './CandidatesList.css'
import { Spinner, Table } from 'react-bootstrap';
import { getCandidatesInfo, deleteCandidate } from "../../../../services/CandidatesService";




const CandidatesList = () => {
    
    const [candidates, setCandidates] = useState(null)

    const deleteHandler = ((e) => {
        deleteCandidate(e.target.id)
        .then(res => {
            let updatedCandidates = candidates.filter(cand => cand.id !== e.target.id)
            setCandidates(updatedCandidates)
        })
        .catch(e => console.log(e))  
    })

    useEffect(() => {
        getCandidatesInfo()
        .then(res => setCandidates(res))
        .catch(error => console.log(error))
    }, [])

    

    const getCandidates =() => {
        let candidatesRow = []
        candidates.forEach(cand => {
            candidatesRow.push(<tr key={cand.id}>
               
                <td>{cand.firstName}</td>
                <td>{cand.lastName}</td>
                <td>{cand.vacancy}</td>
                <td>{cand.email}</td>
                <td>{cand.phoneNumber}</td>
                <td>{cand.comments}</td>
                
                <td>
                <a className='link__style' href={cand.cv} target='_blank' rel="noreferrer">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619718795/Vitae/iconos/download_mh6ecg.png" id={cand.id} alt="edit" className="mx-3 custom__img" width="20px" />
                </a>
                </td>
                <td><img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={cand.id} alt="delete" className="mx-3 custom__img" width="20px" onClick={deleteHandler}/></td>
            </tr>)
        })
        return candidatesRow
    }

    return(
        <div className="container CandidatesList">
            <div className='row'>
            <h2 className='col-12 my-2 py-2'>Administración de personal</h2>
            </div>
            
            { candidates ? 
            (<Table size="sm" bordered hover >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Puesto</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Comentarios</th>
                        <th>Curriculum</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {getCandidates()}
                </tbody>
            </Table>)
            :
            (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
            </Spinner>)}
        </div>
    )
};


export default CandidatesList;