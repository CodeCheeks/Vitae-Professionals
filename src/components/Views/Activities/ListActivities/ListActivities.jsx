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
        <div className="container">
            <h1 className="mb-5">Mis Actividades</h1>

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
                    <h5>Añadir Actividad</h5>
                </div>

            </NavLink>
            
            {
                activities ? 
                activities.length > 0 ?
                (activities.map(activity => {
                    return(
                        <Accordion key = {activity.id}>
                            <Card>
                                <Card.Header className="row justify-content-between align-items-center">
                                    <div className="col-1">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619607719/Vitae/iconos/image_euso1q.png" alt="show" width="30" height="30"/>
                                        </Accordion.Toggle>
                                    </div>
                                    <div className="col-3">
                                        <h6>{activity.title}</h6>
                                    </div>
                                    <div className="col-2">
                                        <h6>Duración: {activity.duration}</h6>
                                    </div>
                                    <div className="col-2">
                                        <h6>Horario: {activity.schedule}</h6>
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




