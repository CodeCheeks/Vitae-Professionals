import React, { useEffect, useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import './AdminElders.css'
import { Button, Modal, Spinner, Table } from 'react-bootstrap';
import { getEldersInfo, deleteElder } from "../../../../services/ElderService";

import "./AdminElders.css"

const AdminElders = () => {
    const [elders, setElders] = useState(null)

    const [elderId, setElderId] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setElderId(e.target.id)
    };

    
    const deleteHandler = ((e) => {

        deleteElder(elderId)
        .then(res => {
            let updatedElders = elders.filter(elder => elder.id !== elderId)
            setElders(updatedElders)
            setElderId(null)
            setShow(false)
        })
        .catch(e => console.log(e))  
    })

    useEffect(() => {
        getEldersInfo()
        .then(res => setElders(res))
        .catch(error => console.log(error))
    }, [])

    const getElders =() => {
        let eldersRow = []
        elders.forEach(elder => {
            eldersRow.push(<tr key={elder.id}>
                <td><Link to={`/elders/${elder.id}`} className='col-2 list__items'>{elder.firstname} {elder.lastname}</Link></td>
                <td className={((elder.group) === 'Rojo') ? 'red' : ((elder.group) === 'Naranja') ? 'orange' : 'green'}>⬤</td>
                <td>{elder.age}</td>
                <td>{elder.relative.firstname} {elder.relative.lastname}</td>
                <td>
                <NavLink className='link__style'to={`/personal-area/adminElders/editElder/${elder.id}`}>
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/editar_u5y3fw.png" id={elder.id} alt="edit" className="mx-3 custom__img" width="20px" />
                </NavLink>
                </td>
                <td><img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={elder.id} alt="delete" className="mx-3 custom__img" width="20px" onClick={handleShow}/></td>
            </tr>)
        })
        return eldersRow
    }

    return (
        <div className="container AdminElders">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Desea eliminar el elemento?</Modal.Body>
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
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620145105/Vitae/iconos/user_f9qusq.png" className='mx-2  ' alt="reports" width='80'/>
                        Administrar usuarios y familiares
                    </h1>
                </div>
            </div>
            { elders ? 
            (<Table size="sm" bordered hover >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Grupo</th>
                        <th>Edad</th>
                        <th>Familiar</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {getElders()}
                </tbody>
            </Table>)
            :
            (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
            </Spinner>)}
        </div>
    );
};

export default AdminElders;