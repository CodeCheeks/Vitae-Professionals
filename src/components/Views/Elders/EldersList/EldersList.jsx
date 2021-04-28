import React, { useContext } from 'react';
import { ElderContext } from "../../../../contexts/ElderContext"
import {Link} from 'react-router-dom'
import './EldersList.css'
import { Spinner, Table } from 'react-bootstrap';

const EldersList = () => {
    const { elders } = useContext(ElderContext);
    

    const getElders =() => {
        let eldersRow = []
        elders.forEach(elder => {
            eldersRow.push(<tr key={elder.id}>
                <td><Link to={`/elders/${elder.id}`} className='col-2 list__items'>{elder.firstname} {elder.lastname}</Link></td>
                <td className={((elder.group) === 'Rojo') ? 'red' : ((elder.group) === 'Naranja') ? 'orange' : 'green'}>⬤</td>
                <td>{elder.age}</td>
                <td>{elder.relative.firstname}</td>
                <td>{elder.relative.phonenumber}</td>
            </tr>)
        })
        return eldersRow
    }

    return(
        <div className="container EldersList">
            { elders ? 
            (<Table size="sm" bordered hover >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Grupo</th>
                        <th>Edad</th>
                        <th>Familiar</th>
                        <th>Teléfono</th>
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
    )
};


export default EldersList;