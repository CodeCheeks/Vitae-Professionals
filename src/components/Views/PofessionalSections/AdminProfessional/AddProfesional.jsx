import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../../contexts/UserContext';
import {addUser } from '../../../../services/UserService'



const AddProfessional = () => {
    
    const { user } = useContext(UserContext);
    const { push } = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        addUser(data)
        .then((res) => push('/personal-area/adminProfessional'))
        .catch(e => console.log(e))
    }
 

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-10 col-12 border m-5 p-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="row mt-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.firstname) && "is-invalid"} type="string" placeholder="Nombre" {...register("firstname", { required: true })}/>
                                    {errors.firstname && <div className="invalid-feedback">Introduzca nombre</div>}
                                </Form.Group>
                            </div>
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.lastname) && "is-invalid"} type="string" placeholder="Apellidos" {...register("lastname", { required: true })}/>
                                    {errors.lastname && <div className="invalid-feedback">Introduzca apellidos</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.phonenumber) && "is-invalid"} type="string" placeholder="Teléfono" {...register("phonenumber", { required: true })}/>
                                    {errors.phonenumber && <div className="invalid-feedback">Introduzca un teléfono</div>}
                                </Form.Group>
                            </div>
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.email) && "is-invalid"} type="string" placeholder="Email" {...register("email", { required: true })}/>
                                    {errors.email && <div className="invalid-feedback">Introduzca un email</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.password) && "is-invalid"} type="password" placeholder="Contraseña" {...register("password", { required: true })}/>
                                    {errors.password && <div className="invalid-feedback">Introduzca una contraseña válida</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                <Form.Label className='d-flex '>Especialidad</Form.Label>
                                <Form.Control as="select" className={(errors.password) && "is-invalid"} type="string" {...register("occupation")}>
                                    <option>nurse</option>
                                    <option>physiotherapist</option>
                                    <option>doctor</option>
                                    <option>director</option>
                                    <option>coordinator</option>
                                    <option>psychologist</option>
                                    <option>occupational therapist</option>
                                    <option>social worker</option>
                                    <option>animator</option>
                                    <option>other</option>
                                </Form.Control>
                                <Form.Check className='my-3 d-flex'
                                    {...register("admin")}
                                    type='checkbox'
                                    id='default-checkbox'
                                    label='Con permisos de administrador'
                                />
                                </Form.Group>
                            </div>
                        </div>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default AddProfessional;
