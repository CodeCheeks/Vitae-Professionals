import React, { useEffect, useState } from 'react';
import './ElderActivity.css'
import { Spinner, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
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
                <td>{`${act.startDate.split('T',1)}`}</td>
                <td>{act.startHour}-{act.finishHour}</td>
                <td>{act.participants.length}</td>
                <td>{act.organizer.firstname} {act.organizer.lastname}</td>
                

            </tr>)
        })
        return activitiesRow
    }
    
    return(
        <div className="container UsersList">
            <div className="row my-4">
                <div className="col-12 pt-5">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034455/Vitae/iconos/calendario_n7aojk.png" className='mx-2  ' alt="reports" width='80'/>
                        {elder ? <h1>Actividades de {elder.firstname} {elder.lastname}</h1> : <Spinner animation="border" variant="info" />}
                    </h1>
                </div>
            </div>
            
            { elder ? 
            (<Table size="sm" bordered hover >
                <thead>
                    <tr>
                        <th>Actividad</th>
                        <th>Día</th>
                        <th>Horario</th>
                        <th>Participantes</th>
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