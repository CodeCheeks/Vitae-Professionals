import React, {useEffect, useState } from 'react';
import './CreateElder.css'
import { Col, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { addElder, editElder, getElderInfoById } from '../../../../services/ElderService';
import { useHistory, useParams } from 'react-router';


const CreateElder = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { push } = useHistory();
    const {elder_id} = useParams()
    const [elderData, setelderData] = useState(null)

    const onSubmit = (data) => {
        data.age = new Date().getFullYear()-(data.birth.split("-")[0])
        console.log(data)
        if(!elder_id){
            addElder(data)
                .then((response) => { push("/personal-area/adminElders")})
                .catch((e) => console.log(e))
        }
        else{
            editElder(elder_id,data)
                .then((response) => { push("/personal-area/adminElders")})
                .catch((e) => console.log(e))
        }

    }

    useEffect(() => {
        elder_id && getElderInfoById(elder_id)
        .then(res => setelderData(res))
        .catch(e => console.log(e)) 
    }, [elder_id]);

    const getForm = () => {
    return (
        <div className='container'>
            <div className="container">
                <div className="row justify-content-center mt-5">
                <h3 className='form__title'>Formulario de alta de usuarios y familiares</h3>
                    <div className="col-lg-8 mt-5 form__wrapper">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Row>
                                <h3>Familiar</h3>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="firstname">
                                    <Form.Control  className={errors.firstname && "is-invalid"} placeholder="Nombre" defaultValue={elder_id && elderData.relative.firstname} type="string" {...register("firstname", { required: true })} />
                                    {errors.firstname && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="lastname">
                                    <Form.Control className={errors.lastname && "is-invalid"} placeholder="Apellidos" defaultValue={elder_id && elderData.relative.lastname} type="string" {...register("lastname", { required: true })} />
                                    {errors.lastname && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="email">
                                    <Form.Control className={errors.email && "is-invalid"} placeholder="Email" defaultValue={elder_id && elderData.relative.email} type="email" {...register("email", { required: true })} />
                                    {errors.email && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="phonenumber">
                                    <Form.Control className={errors.email && "is-invalid"} placeholder="Teléfono" defaultValue={elder_id && elderData.relative.phonenumber} type="string" {...register("phonenumber", { required: true })}/>
                                    {errors.phonenumber && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="address">
                                    <Form.Control className={errors.email && "is-invalid"} placeholder="Dirección" defaultValue={elder_id && elderData.relative.address} type="string" {...register("address", { required: true })} />
                                    {errors.address && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <h3>Usuario</h3>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="elderfirstname">
                                    <Form.Control  className={errors.elderfirstname && "is-invalid"} placeholder="Nombre" defaultValue={elder_id && elderData.firstname} type="string" {...register("elderfirstname", { required: true })} />
                                    {errors.elderfirstname && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="elderlastname">
                                    <Form.Control className={errors.elderlastname && "is-invalid"} placeholder="Apellidos" defaultValue={elder_id && elderData.lastname} type="string" {...register("elderlastname", { required: true })} />
                                    {errors.elderlastname && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="dni">
                                    <Form.Control className={errors.dni && "is-invalid"} placeholder="dni"  defaultValue={elder_id && elderData.dni}type="dni" {...register("dni", { required: true })} />
                                    {errors.dni && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="birth">
                                    <Form.Control className={errors.birth && "is-invalid"} placeholder="birth" defaultValue={elder_id && elderData.dateOfBirth} type="date" {...register("birth", { required: true })} />
                                    {errors.birth && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="elderaddress">
                                    <Form.Control className={errors.email && "is-invalid"} placeholder="Dirección" defaultValue={elder_id && elderData.address} type="string" {...register("elderaddress", { required: true })} />
                                    {errors.elderaddress && <div className="invalid-feedback">Rellene este campo</div>}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="gender">
                                    <Form.Control className={errors.gender && "is-invalid"} placeholder="Género" defaultValue={elder_id && elderData.gender} as="select" {...register("gender", { required: true })}>
                                        <option  value="">Género</option>
                                        <option value="Mujer">Mujer</option>
                                        <option value="Varón">Hombre</option>
                                    </Form.Control>
                                    {errors.gender && <div className="invalid-feedback">Seleccione una opción</div>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="diet">
                                    <Form.Control className={errors.diet && "is-invalid"} placeholder="Dieta" defaultValue={elder_id && elderData.diet} as="select" {...register("diet", { required: true })}>
                                        <option value="">Seleccione Dieta</option>
                                        <option>Basal</option>
                                        <option>Diabético</option>
                                        <option>Sin gluten</option>
                                        <option>Bajo en sal</option>
                                    </Form.Control>
                                    {errors.diet && <div className="invalid-feedback">Seleccione una opción</div>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="group">
                                    <Form.Control className={errors.group && "is-invalid"} placeholder="Grupo" defaultValue={elder_id && elderData.group} as="select" {...register("group", { required: true })}>
                                        <option  value="">Seleccione Grupo</option>
                                        <option>Verde</option>
                                        <option>Naranja</option>
                                        <option>Rojo</option>
                                    </Form.Control>
                                    {errors.group && <div className="invalid-feedback">Seleccione una opción</div>}
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )};

    return (
        elder_id ? elderData ?
        getForm()
        :
        (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
        </Spinner>)
        :
        getForm()
    )
};

export default CreateElder;


