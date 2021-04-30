import React, { useEffect, useState } from 'react';
import './ElderActivity.css'
import { Spinner, Table } from 'react-bootstrap';

import { useParams } from 'react-router';
import { deleteParticipants } from '../../../../services/activitiesService';
import { getElderData } from '../../../../services/EldersService';



const ElderActivity = () => {
    
    const {id} = useParams()
    const [elder, setElder] = useState(null)

    useEffect(() => {
        console.log(useParams)
        getElderData(id)
        .then(res => setElder(res))
        .catch(error => console.log(error))
    }, [id])

    const getActivities= () => {
        console.log(elder.therapies)
        let activitiesRow = []
        elder.therapies.forEach(act => {
            activitiesRow.push(<tr key={act.id}>
               
                <td>{act.title}</td>
                <td>{act.schedule}</td>
                <td>{act.duration} minutos</td>
                <td>{act.organizer.firstname} {act.organizer.lastname}</td>
                

            </tr>)
        })
        return activitiesRow
    }
    
    return(
        <div className="container UsersList">
            <div className='row'>
            <h2 className='col-12 my-2 py-2'>Actividades</h2>
            </div>
            
            { elder ? 
            (<Table size="sm" bordered hover >
                <thead>
                    <tr>
                        <th>Actividad</th>
                        <th>Horario</th>
                        <th>Duración</th>
                        <th>Organizador</th>
                    </tr>
                </thead>
                <tbody>
                {getActivities()}
                </tbody>
            </Table>)
            :
            (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
            </Spinner>)}
        </div>
    )
};


export default ElderActivity;