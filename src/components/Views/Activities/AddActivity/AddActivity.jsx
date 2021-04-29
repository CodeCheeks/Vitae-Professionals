import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, Spinner, Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../../contexts/UserContext';
import { ElderContext } from "../../../../contexts/ElderContext"
import {addActivity, getDataActivity, editActivity, deleteParticipants } from '../../../../services/activitiesService'
import { Link } from 'react-router-dom';



const AddActivity = () => {
    const { activity_id} = useParams()
    const { user } = useContext(UserContext);
    const { elders } = useContext(ElderContext);
    const { push } = useHistory();
    const [dataActivity, setdataActivity] = useState(null);
    
    const { register, handleSubmit, formState: { errors } } = useForm();


    const deleteHandler = (e) => {
        console.log(e.target.id)
        deleteParticipants(e.target.id)
        .then()
        .catch(e => console.log(e))
    }


    const onSubmit = (data) => {
        if(!activity_id){
            data.organizer = user.id
            addActivity(data)
            .then(() => push(`/personal-area/activities`))
            .catch(e => console.log(e))
        }
        else{
            editActivity(activity_id, data)
            .then(() => push(`/personal-area/activities`))
            .catch(e => console.log(e))
        }
    }
    
    useEffect(() => {
        activity_id && getDataActivity(activity_id)
        .then(data => setdataActivity(data))
        .catch(e => console.log(e)) 
    }, []);
    
    const getForm = () => {
        return(
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg- col-md-8 col-sm-10 col-12 border m-5 p-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.title) && "is-invalid"} type="string" defaultValue={activity_id && dataActivity.title} placeholder="Título" {...register("title", { required: true })}/>
                                    {errors.title && <div className="invalid-feedback">Introduzca título de la actividad</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.duration) && "is-invalid"} type="string" defaultValue={activity_id && dataActivity.duration} placeholder="duration" {...register("duration", { required: true })}/>
                                    {errors.duration && <div className="invalid-feedback">Introduzca duración de la actividad</div>}
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.schedule) && "is-invalid"} type="string" defaultValue={activity_id && dataActivity.schedule} placeholder="schedule" {...register("schedule", { required: true })}/>
                                    {errors.schedule && <div className="invalid-feedback">Introduzca duración de la actividad</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                                { elders ? 
                                (<Table size="sm" bordered hover >
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Grupo</th>
                                            <th>Gestionar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {elders.map(elder => {

                                            return(
                                                    (<tr key={elder.id}>
                                                        <td><Link to={`/elders/${elder.id}`} className='col-2 list__items'>{elder.firstname} {elder.lastname}</Link></td>
                                                        <td className={((elder.group) === 'Rojo') ? 'red' : ((elder.group) === 'Naranja') ? 'orange' : 'green'}>⬤</td>
                                                        {dataActivity.participants.includes(elder.id) 
                                                        ? 
                                                        <td> <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={elder.id} alt="delete" className="mx-3 custom__img" width="15"  height="15" onClick={deleteHandler}/></td>
                                                        :
                                                        <td><Form.Check type="checkbox" value={elder.id} {...register("participants")} /></td>
                                                        }
         
                                                    </tr>)
                                            )    
                                    })}
                                    </tbody>
                                </Table>)
                                :
                                (<Spinner className="m-5" animation="border" role="status" variant="info">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>)}
                        </div>
                    

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
        )
    }

    return (
        activity_id ? dataActivity ?
        getForm()
        :
        (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
        </Spinner>)
        :
        getForm()
    );
};

export default AddActivity;



