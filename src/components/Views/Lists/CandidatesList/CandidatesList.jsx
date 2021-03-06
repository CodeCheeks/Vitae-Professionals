
import React, { useEffect, useState } from 'react';
import './CandidatesList.css'
import { Button, Modal, Spinner, Table } from 'react-bootstrap';
import { getCandidatesInfo, deleteCandidate } from "../../../../services/CandidatesService";




const CandidatesList = () => {
    
    const [candidates, setCandidates] = useState(null)

    const [candidateId, setCandidateId] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setCandidateId(e.target.id)
    };


    const deleteHandler = ((e) => {
        deleteCandidate(candidateId)
        .then(res => {
            let updatedCandidates = candidates.filter(cand => cand.id !== candidateId)
            setCandidates(updatedCandidates)
            setCandidateId(null)
            setShow(false)
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
                
                
                <td>
                <a className='link__style' href={cand.cv} target='_blank' rel="noreferrer">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619718795/Vitae/iconos/download_mh6ecg.png" id={cand.id} alt="edit" className="mx-3 custom__img" width="15px" />
                </a>
                </td>
                <td><img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={cand.id} alt="delete" className="mx-3 custom__img" width="15px" onClick={handleShow}/></td>
            </tr>)
        })

        
        return candidatesRow 
    }

    return(
        <div className="container CandidatesList">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar</Modal.Title>
                </Modal.Header>
                <Modal.Body>??Desea eliminar el elemento?</Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={deleteHandler}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620144743/Vitae/iconos/informacion-personal_askbdn.png" className='mx-2  ' alt="reports" width='80'/>
                        Administrar Candidaturas
                    </h1>
                </div>
            </div>
            { 
            candidates ? 
            candidates.length > 0 ? 
            (<Table size="sm" bordered hover >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Puesto</th>
                        <th>Email</th>
                        <th>Tel??fono</th>
                        <th>Curriculum</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {getCandidates()}
                </tbody>
            </Table>)
            : <h4>No existen candidaturas pendientes</h4> 
            :
            (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
            </Spinner>) }
        </div>
    )
};


export default CandidatesList;