import React, { useEffect, useContext, useState } from 'react';
import './ListReports.css'
import { UserContext } from "../../../../contexts/UserContext";
import { getReports, deleteReports } from "../../../../services/ReportsService";
import { Accordion, Button, Card, Spinner, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';




const ListReports = () => {
    
    const {id} = useParams()
    const { user } = useContext(UserContext);
    const [reports, setReports] = useState(null);
    const [reportId, setReportId] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setReportId(e.target.id)
    };

    const deleteHandler = () => {
        deleteReports(reportId)
        .then(res => {
            let updatedReports = reports.filter(rep => rep.id !== reportId)
            setReports(updatedReports)
            setReportId(null)
            setShow(false)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        getReports(id ? id : user.id)
        .then(res => setReports(res))
        .catch(error => console.log(error))
    }, [user, id]);


    return (
        <div className="container my-5">

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

            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034340/Vitae/iconos/document_f08uxb.png" className='mx-2  ' alt="reports" width='80'/>
                        Mis informes
                    </h1>
                </div>
            </div>
            {
                reports ? 
                reports.length > 0 ?
                (reports.sort(function(a,b){return new Date(b.createdAt) - new Date(a.createdAt);
                }).map(report => {
                    return(
                        <Accordion key = {report.id}>
                            <Card>
                                <Card.Header className="row justify-content-between align-items-center">
                                    <div className="col-1">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620144303/Vitae/iconos/flecha-hacia-abajo_1_w6ritf.png" alt="show" width="30" height="30"/>
                                        </Accordion.Toggle>
                                    </div>
                                    <div className="col-2 d-none d-md-block">
                                        {!id&&report.elder && <h6>Título: {report.title} </h6>}


                                    </div>
                                    <div className="col-4">
                                        {!id&&report.elder && <h6>Usuario: {report.elder.firstname} {report.elder.lastname} </h6>}

                                        {id&&report.professional && <h6>Profesional: {report.professional.firstname} {report.professional.lastname}</h6> }

                                    </div>
                                    <div className="col-3">
                                        <h6>{(report.createdAt).split('T').join(' a las ').split('.',1)}</h6>
                                    </div>
                                    <div className="col-2">
                                        <NavLink className='link__style'to={`/elders/edit-report/${report.id}`}>
                                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/editar_u5y3fw.png" id={report.id} alt="edit" className="mx-3 custom__img" width="20" height="20"/>
                                        </NavLink>
                                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={report.id} alt="delete" className="mx-3 custom__img" width="20px"  height="20" onClick={handleShow}/>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <div className="container justify-content-start">
                                        <div className="row">
                                            <div className="col">
                                                <h6>{report.title}</h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="custom__description">{report.description}</p>
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
                <h4 className="m-5">No existen informes que mostrar</h4>
                : <Spinner animation="border" variant="info" />
            }
        </div>



    );
};

export default ListReports;




