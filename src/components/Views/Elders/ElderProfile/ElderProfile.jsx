import React, { useContext, useEffect, useState } from 'react';
import './ElderProfile.css'
import { useParams } from 'react-router';
import { Button, Collapse, Form, Modal, Spinner, Toast } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { elderImages, getElderInfoById } from '../../../../services/ElderService';
import { addMessage } from '../../../../services/messageService';
import { UserContext } from '../../../../contexts/UserContext';

const ElderProfile = () => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit,reset, formState: { errors } } = useForm({ defaultValues: { title: "", message:""} });
    const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm();
    const {id} = useParams()
    const { user } = useContext(UserContext);
    const [elder, setElder] = useState(null);

    
    const [show1, setShow1] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = e => setShow(true);

    const messageHandler = (data) => {
        Object.assign(data, {
            receiver: elder.relative.id,
            sender: user.id
        });

        setShow(false)
        addMessage(elder.relative.id, data)
        .then(mes => {
            reset({title:"", message:""})
            
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        getElderInfoById(id)
        .then(res => {
            setElder(res)
        })
        .catch(error => console.log(error))

    }, [id]);

    const imageHandler = (data) => {
        data.picture = data.picture[0]
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
        
        elderImages(formData, id)
        .then(res => console.log(""))
        .catch(e => console.log(e))
    }


    const groupColor = (group) => {
        if(group === 'Rojo'){
            return 'col-1 list__items red'
        }else if(group === 'Naranja'){
            return 'col-1 list__items orange'  
        }else{
            return 'col-1 list__items green' 
        }
    }

    return (
        
        <div className='ElderProfile'>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Enviar mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {elder ?
                    <Form onSubmit={handleSubmit(messageHandler)}>
                        <div className="row mt-5">
                            <div className="col mx-3">
                                    <Form.Control type="string" placeholder= {`Destinatario: ${ elder.relative.firstname} `} disabled/>
                                    <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.title) && "is-invalid"} type="title" placeholder="Título" {...register("title", { required: true })}/>
                                    {errors.title && <div className="invalid-feedback">Introduzca Título</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasicDescription">
                                    <Form.Control as="textarea" className={(errors.message && "is-invalid")} style={{height: "250px"}} type="message" placeholder="Escribe aquí tu mensaje" 
                                    {...register("message", { required: true })}/>
                                    {errors.message && <div className="invalid-feedback">Introduzca el mensaje</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <Button className="mr-2" variant="info" onClick={handleClose}>Close</Button>
                            <Button className="mr-5" variant="danger" type="submit">Enviar</Button>

                        </div>
                    </Form> : <p>'There was an error'</p>
                }
            
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            
            {/* IMAGE TOAST */}
            
            {elder ? 
            <div className="container-fluid  p__elderprofile__wrapper">
                <div className="container px-1 py-5 my-5 border box__color">
                <Toast onClose={() => setShow1(false)} show={show1} delay={5000} autohide 
                    style={{
                        position: 'absolute',
                        bottom: 30,
                        right: 0,
                        backgroundColor:'#07c5e7',
                        width:'200px',
                    }}
                >
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                        />
                        <strong className="mr-auto">Nueva imagen</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Imagen añadida
                    </Toast.Body>
                </Toast>
                    <div className="row justify-content-center ">
                        <div className="col-4">
                            <img src={elder.profilepicture} width="150px" alt="avatar"/>
                            <div className="col-12 my-2">
                                <h1>{elder.firstname} {elder.lastname}</h1>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-content-center text-md-left">
                            <h6 >Grupo:<span className={groupColor(elder.group)}>{elder.group}</span> </h6>
                            <h6 >Género: {elder.gender} </h6>
                            <h6>Nacimiento: {elder.dateOfBirth.split('T')[0].split("-").reverse().join("-")} </h6>
                            <h6>Edad: {elder.age}</h6>
                        </div>
                        <div className="col-12 col-md-5  d-flex flex-column justify-content-center align-content-center text-md-left">
                            <h6><img className="mx-1" src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619546680/Vitae/iconos/food_dt4d5r.png" alt="" width="25"/> Dieta: {elder.diet}</h6>
                            <h6><img className="mx-1" src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619546183/Vitae/iconos/pngwing.com_afyg5o.png" alt="" width="25"/>Dirección: {elder.address} </h6>
                            <h6><img className="mx-1" src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619546583/Vitae/iconos/klipartz.com_p3aao4.png" alt="" width="25"/>Familiar: {elder.relative.firstname} </h6>
                            <h6><img className="mx-1" src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619547020/Vitae/iconos/klipartz.com_1_zf01wx.png" alt="" width="25"/>Contactar: {elder.relative.phonenumber}</h6>
                        </div>
                    </div>
                    <div className="container px-1 py-3 d-flex justify-content-center">
                        <div className='d-flex flex-column justify-content-center align-items-left btns__wrapper'>
                            <NavLink to={`/elders/${id}/add-reports`} className='py-2 my-3 btn-info'>Añadir informe</NavLink>
                            <NavLink to={`/elders/${id}/reports`} className='py-2 my-3 btn-info'>Ver informes</NavLink>
                            <NavLink to={`/elders/actividades/${id}`} className='py-2 my-3 btn-info' therapies = {elder.therapies}>Ver actividades</NavLink> 
                            <Button className="my-1" onClick={handleShow} variant="info" type="submit">Enviar mensaje a {elder.relative.firstname}</Button>
                            <Button className="my-3" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}variant="info">Añadir imagen</Button>{' '}
                            <Collapse in={open}> 
                                <div className="container">
                                    <div className="row justify-content-center" id="example-collapse-text">
                                        <div className="col">
                                            <Form onSubmit={handleSubmit1(imageHandler)}>
                                                <Form.Group controlId="picture">
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <Form.File className="inputfile my-3" id="picture" {...register1("picture", { required: true })} />
                                                            {errors1.picture && <div className="invalid-feedback">Seleccione una imagen</div>}
                                                        </div>
                                                        <div className="col-4">
                                                        <Button className=' btn-sm my-3' type="submit" onClick={() => setShow1(true)}>Añadir</Button>
                                                        </div>
                                                    </div>
                                                    
                                                </Form.Group>
                                            </Form>
                                        </div>
                                    </div> 
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
            :
            <Spinner className="m-5" animation="border" role="status" variant="info">
            <span className="sr-only">Loading...</span>
            </Spinner>}
        </div>
    );
};

export default ElderProfile;