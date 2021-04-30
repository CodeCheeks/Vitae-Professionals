import React, { useEffect, useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import './AdminElders.css'
import { Spinner, Table } from 'react-bootstrap';
import { getEldersInfo, deleteElder } from "../../../../services/ElderService";

import "./AdminElders.css"

const AdminElders = () => {
    const [elders, setElders] = useState(null)
    
    const deleteHandler = ((e) => {
        console.log(e.target.id)
        deleteElder(e.target.id)
        .then(res => {
            let updatedElders = elders.filter(elder => elder.id !== e.target.id)
            setElders(updatedElders)
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
                <NavLink className='link__style'to={`/personal-area/adminProfessional/editProfessional/${elder.id}`}>
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/editar_u5y3fw.png" id={elder.id} alt="edit" className="mx-3 custom__img" width="20px" />
                </NavLink>
                </td>
                <td><img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={elder.id} alt="delete" className="mx-3 custom__img" width="20px" onClick={deleteHandler}/></td>
            </tr>)
        })
        return eldersRow
    }

    return (
        <div className="container AdminElders">
            <div className='row'>
                <h2 className='col-12 my-2 py-2'>Administración de usuarios y familiares</h2>
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