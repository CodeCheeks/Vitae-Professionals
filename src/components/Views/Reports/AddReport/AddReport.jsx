import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../../contexts/UserContext';
import {addReport} from '../../../../services/ReportsService'



const AddReport = () => {
    const {id} = useParams()
    const { user } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { push } = useHistory();
    
    
    const onSubmit = (data) => {
        data.elder = id
        data.professional = user.id
        addReport(data)
        .then(() =>   push(`/elders/${id}`))
        .catch()
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-10 col-12 border m-5 p-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row justify-content-between mt-3">
                            <div className="col-4">
                                <h6>{`Departamento de ${user.occupation}`}</h6>
                            </div>
                            <div className="col-2">
                                <h6>{`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}</h6>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.title) && "is-invalid"} type="title" placeholder="Título" {...register("title", { required: true })}/>
                                    {errors.title && <div className="invalid-feedback">Introduzca Título</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasicDescription">
                                    <Form.Control as="textarea" className={(errors.description && "is-invalid")} style={{height: "250px"}} type="description" placeholder="description" 
                                    {...register("description", { required: true })}/>
                                    {errors.description && <div className="invalid-feedback">Introduzca la descripción</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-3">
                                <h6>{`${user.firstname} ${user.lastname} `}</h6>
                            </div>
                        </div>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddReport;





