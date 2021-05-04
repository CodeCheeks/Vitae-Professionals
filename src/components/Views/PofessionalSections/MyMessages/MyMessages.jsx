import React, { useEffect, useContext, useState } from 'react';
import "./MyMessages.css"
import { UserContext } from "../../../../contexts/UserContext";
import { receivedMessages, sentMessages, deleteMessage } from '../../../../services/messageService';
import { Accordion, Button, Card, Spinner, Modal } from 'react-bootstrap';

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
            <div className="col">
                <h2 className="mb-3">Recibidos</h2>
                {
                    received ? 
                    received.length > 0 ?
                    (received.map(mes => {
                        return(
                            <Accordion key = {mes.id}>
                                <Card>
                                    <Card.Header className="row justify-content-between align-items-center">
                                        <div className="col-1">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619607719/Vitae/iconos/image_euso1q.png" alt="show" width="30" height="30"/>
                                            </Accordion.Toggle>
                                        </div>
                                        <div className="col-4">
                                            {<h6>Título: {mes.title}</h6>}
                                        </div>
                                        <div className="col-3">
                                            {<h6>From: {mes.sender.firstname} </h6>}
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
            <div className="col">
            <h2 className="mb-3">Enviados</h2>
            {
                    sent ? 
                    sent.length > 0 ?
                    (sent.map(mes => {
                        return(
                            <Accordion key = {mes.id}>
                                <Card>
                                    <Card.Header className="row justify-content-between align-items-center">
                                        <div className="col-1">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619607719/Vitae/iconos/image_euso1q.png" alt="show" width="30" height="30"/>
                                            </Accordion.Toggle>
                                        </div>
                                        <div className="col-4">
                                            {<h6>Título: {mes.title}</h6>}
                                        </div>
                                        <div className="col-3">
                                            {<h6>To: {mes.receiver.firstname} </h6>}
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
                    <h5 className="m-5">No ha enviado ningún mensaje</h5>
                    : <Spinner animation="border" variant="info" />
                }

            </div>
        </div>
    );
};

export default MyMessages;

