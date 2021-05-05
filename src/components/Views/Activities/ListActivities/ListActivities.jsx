import React, { useEffect, useContext, useState } from 'react';
import './ListActivities.css'
import { UserContext } from "../../../../contexts/UserContext";
import { getActivities, deleteActivity } from "../../../../services/activitiesService";
import { Accordion, Button, Card, Modal, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';


const ListActivities = () => {
    
    const {id} = useParams()
    const { user } = useContext(UserContext);
    const [activities, setActivities] = useState(null);


    const [activityId, setActivityId] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setActivityId(e.target.id)
    };

    const editHandler = (e) => {
        console.log("click edit")
        
    }


    const deleteHandler = (e) => {

        deleteActivity(activityId)
        .then(act => {
            let updatedActivities = activities.filter(act => act.id !== activityId)
            setActivities(updatedActivities)
            setActivityId(null)
            setShow(false)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        getActivities(id ? id : user.id)
        .then(res => setActivities(res))
        .catch(error => console.log(error))
    }, [user, id]);


    return (
        <div className="container my-5">
            <div className="row my-4">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034455/Vitae/iconos/calendario_n7aojk.png" className='mx-2  ' alt="reports" width='80'/>
                        Mis actividades
                    </h1>
                </div>
            </div>

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

            <NavLink className='link__style'to={`/personal-area/activities/addActivity`}>
                <div>
                    <button className='btn btn-secondary mb-5'>+ Añadir actividad</button>
                </div>

            </NavLink>
            
            {
                activities ? 
                activities.length > 0 ? 
                (activities.sort(function(a,b){return new Date(a.startDate) - new Date(b.startDate);}).map(activity => {
                    return(
                        <Accordion key = {activity.id}>
                            <Card>
                                <Card.Header className="row justify-content-between align-items-center">
                                    <div className="col-1">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620144303/Vitae/iconos/flecha-hacia-abajo_1_w6ritf.png" alt="show" width="30" height="30"/>
                                        </Accordion.Toggle>
                                    </div>
                                    <div className="col-2">
                                        <h6>{activity.title}</h6>
                                    </div>
                                    <div className="col-5">
                                        <h6>Día: {`${activity.startDate.split('T',1)}`}</h6>
                                        <h6>Horario: {`${activity.startHour}-${activity.finishHour}`}</h6>
                                    </div>
                                    <div className="col-2">
                                        <h6>Participantes: {activity.participants.length}</h6>
                                    </div>
                                    <div className="col-2">
                                        <NavLink className='link__style'to={`/personal-area/editActivity/${activity.id}`}>
                                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/editar_u5y3fw.png" id={activity.id} alt="edit" className="mx-3 custom__img" width="20" height="20" onClick={editHandler}/>
                                        </NavLink>
                                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={activity.id} alt="delete" className="mx-3 custom__img" width="20px"  height="20" onClick={handleShow}/>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <div className="row justify-content-center">
                                        <div className="col">
                                            {
                                                activity.participants.length > 0 ?
                                                activity.participants.map(elder => {
                                                return (
                                                    <div key={elder.id} className="row justify-content-center">
                                                        <h6>{elder.firstname} {elder.lastname}</h6>
                                                    </div>
                                                )})
                                                :
                                                <h6>No existen usuarios inscritos en la actividad</h6>
                                            }
                                            
                                        </div>
                                    </div>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        
                    )
                })) 
                :
                <h4 className="m-5">No existen actividades que mostrar</h4>
                : <Spinner animation="border" variant="info" />
            }
        </div>
    );
};

export default ListActivities;




