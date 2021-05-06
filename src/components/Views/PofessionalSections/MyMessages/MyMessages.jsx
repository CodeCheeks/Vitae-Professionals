import React, { useEffect, useContext, useState } from 'react';
import "./MyMessages.css"
import { UserContext } from "../../../../contexts/UserContext";
import { receivedMessages, sentMessages, deleteMessage } from '../../../../services/messageService';
import { Accordion, Button, Card, Spinner, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyMessages = () => {
    const { user } = useContext(UserContext);

    const [sent, setSent] = useState(null);
    const [received, setReceived] = useState(null);
    const [messageId, setMessageId] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        setShow(true)
        setMessageId(e.target.id)
    };
   const deleteHandler = () => {

        deleteMessage(messageId)
        .then(res => {
            console.log(res)
            let updatedsent = sent.filter(mes => mes.id !== messageId)
            setSent(updatedsent)

            let updatedReceived = received.filter(mes => mes.id !== messageId)
            setReceived(updatedReceived)
            setMessageId(null)
            setShow(false)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        receivedMessages(user.id)
        .then(res => {
            setReceived(res)
        })
        .catch(error => console.log(error))

        sentMessages(user.id)
        .then(res => {
            setSent(res)
        })
        .catch(error => console.log(error))

    
    }, [user.id]);

    return (
        <div className='MyMessages row my-5'>

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
            <div className=" col-md-12  col-lg-6">
            <div className="row mb-5 mb-3">
                <div className="col-12">
                    <h2 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620120426/Vitae/iconos/see-messsage_s7zqrj.svg" className='mx-3 pb-3  ' alt="reports" width='50'/>
                        Mensajes Recibidos
                    </h2>
                </div>
            </div>
                {
                    received ? 
                    received.length > 0 ?
                    (received.sort(function(a,b){return new Date(b.createdAt) - new Date(a.createdAt)}).map(mes => {
                        return(
                            <Accordion key = {mes.id}>
                                <Card>
                                    <Card.Header className="row justify-content-between align-items-center">
                                        <div className="col-1">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620144303/Vitae/iconos/flecha-hacia-abajo_1_w6ritf.png" alt="show" width="30" height="30"/>
                                            </Accordion.Toggle>
                                        </div>
                                        <div className="col-3">
                                            {<h6>{mes.title}</h6>}
                                        </div>
                                        <div className="col-2">
                                            {<h6>De: {mes.sender.firstname} </h6>}
                                        </div>
                                        <div className="col-2">
                                            {<Link to={`/elders/${mes.sender.elder.id}`} className='col l__bar__item'><h6>Usuario: {mes.sender.elder.firstname}</h6></Link>}
                                        </div>
                                        <div className="col-2">
                                            <h6>{(mes.createdAt).split('T')[0].split("-").reverse().join("-")}</h6>
                                        </div>
                                        <div className="col-1">
                                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={mes.id} alt="delete" className="mx-3 custom__img" width="20px"  height="20" onClick={handleShow}/>
                                        </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="container justify-content-start">
                                            <div className="row">
                                                <div className="col">
                                                    <h6>{mes.message}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    })) 
                    :
                    <h5 className="m-5">No ha recibido ningún mensaje</h5>
                    : <Spinner animation="border" variant="info" />
                }
            </div>
            
            <div className=" col-md-12  col-lg-6">
            <div className="row mb-5 mb-3">
                <div className="col-12">
                    <h2 className='text-center main__title'>
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034723/Vitae/iconos/charla_ufydrz.png" className='mx-2  ' alt="reports" width='60'/>
                            Mensajes Enviados
                    </h2>
                </div>
            </div>
            
            {
                    sent ? 
                    sent.length > 0 ?
                    (sent.sort(function(a,b){return new Date(b.createdAt) - new Date(a.createdAt)}).map(mes => {
                        return(
                            <Accordion key = {mes.id}>
                                <Card>
                                    <Card.Header className="row justify-content-between align-items-center">
                                        <div className="col-1">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620144303/Vitae/iconos/flecha-hacia-abajo_1_w6ritf.png" alt="show" width="30" height="30"/>
                                            </Accordion.Toggle>
                                        </div>
                                        <div className="col-3">
                                            {<h6>{mes.title}</h6>}
                                        </div>
                                        <div className="col-3">
                                            {<h6>Para: {mes.receiver.firstname} {mes.receiver.lastname} </h6>}
                                        </div>
                                        <div className="col-2">
                                            <h6>{(mes.createdAt).split('T')[0].split("-").reverse().join("-")}</h6>
                                        </div>
                                        <div className="col-2">
                                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={mes.id} alt="delete" className="mx-3 custom__img" width="20px"  height="20" onClick={handleShow}/>
                                        </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="container justify-content-start">
                                            <div className="row">
                                                <div className="col ">
                                                    <h6 className='message__text__style'>{mes.message}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    })) 
                    :
                    <h5 className="m-5">No ha enviado ningún mensaje</h5>
                    : <Spinner animation="border" variant="info" />
                }

            </div>
        </div>
    );
};

export default MyMessages;

