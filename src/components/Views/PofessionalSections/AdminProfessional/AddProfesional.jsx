import React, {useEffect, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import {addUser, editUser, getUserInfobyId } from '../../../../services/UserService'



const AddProfessional = () => {
    
    const {professional_id} = useParams()
    const { push } = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [professionalData, setprofessionalData] = useState(null)

    const onSubmit = (data) => {
        console.log(professional_id)
        if(!professional_id){
            addUser(data)
                .then((res) => push('/personal-area/adminProfessionals'))
                .catch(e => console.log(e))
        }
        else{
            editUser(professional_id,data)
                .then((res) => push('/personal-area/adminProfessionals'))
                .catch(e => console.log(e))
        }

    }

    useEffect(() => {
        professional_id && getUserInfobyId(professional_id)
        .then(res => setprofessionalData(res))
        .catch(e => console.log(e)) 
    }, [professional_id]);
 
    const getForm = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-10 col-12 border m-5 p-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="row mt-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                <Form.Label className='d-flex '>Nombre</Form.Label>
                                    <Form.Control className={(errors.firstname) && "is-invalid"} type="string" defaultValue={professional_id && professionalData.firstname} placeholder="Nombre" {...register("firstname", { required: true })}/>
                                    {errors.firstname && <div className="invalid-feedback">Introduzca nombre</div>}
                                </Form.Group>
                            </div>
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                <Form.Label className='d-flex '>Apellidos</Form.Label>
                                    <Form.Control className={(errors.lastname) && "is-invalid"} type="string" defaultValue={professional_id && professionalData.lastname} placeholder="Apellidos" {...register("lastname", { required: true })}/>
                                    {errors.lastname && <div className="invalid-feedback">Introduzca apellidos</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                <Form.Label className='d-flex '>Teléfono</Form.Label>
                                    <Form.Control className={(errors.phonenumber) && "is-invalid"} type="string" defaultValue={professional_id && professionalData.phonenumber} placeholder="Teléfono" {...register("phonenumber", { required: true })}/>
                                    {errors.phonenumber && <div className="invalid-feedback">Introduzca un teléfono</div>}
                                </Form.Group>
                            </div>
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                <Form.Label className='d-flex '>Email</Form.Label>
                                    <Form.Control className={(errors.email) && "is-invalid"} type="email" defaultValue={professional_id && professionalData.email} placeholder="Email" {...register("email", { required: true })}/>
                                    {errors.email && <div className="invalid-feedback">Introduzca un email</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {!professional_id &&
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                <Form.Label className='d-flex '>Contraseña</Form.Label>
                                    <Form.Control className={(errors.password) && "is-invalid"} type="password" defaultValue={professional_id && professionalData.password} name='password' placeholder="Contraseña"  {...register("password", { required: true })}/>
                                    {errors.password && <div className="invalid-feedback">Introduzca una contraseña válida</div>}
                                </Form.Group>
                            </div>}
                        </div>
                        <div className="row mt-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                <Form.Label className='d-flex '>Especialidad</Form.Label>
                                <Form.Control as="select" className={(errors.password) && "is-invalid"} defaultValue={professional_id && professionalData.occupation} type="string" {...register("occupation")}>
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
    }

    return (
        professional_id ? professionalData ?
        getForm()
        :
        (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
        </Spinner>)
        :
        getForm()
    )

};

export default AddProfessional;
