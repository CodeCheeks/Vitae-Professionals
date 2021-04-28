import React, { useEffect, useContext, useState } from 'react';
import './MyReports.css'
import { UserContext } from "../../../../contexts/UserContext";
import { getReports, deleteReports } from "../../../../services/ReportsService";
import { Accordion, Button, Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';


const MyReports = () => {
    
    const {id} = useParams()
    const { user } = useContext(UserContext);
    const [reports, setReports] = useState(null);


    const editHandler = (e) => {
        console.log("click edit")
       
    }


    const deleteHandler = (e) => {
        console.log(e.target.id)
        deleteReports(e.target.id)
        .then(res => {
            let updatedReports = reports.filter(rep => rep.id !== e.target.id)
            setReports(updatedReports)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        getReports(id ? id : user.id)
        .then(res => setReports(res))
        .catch(error => console.log(error))
    }, [user, id]);


    return (
        <div className="container">
            <h1 className="mb-5">Informes</h1>
            {
                reports ? 
                reports.length > 0 ?
                (reports.map(report => {
                    return(
                        <Accordion>
                            <Card>
                                <Card.Header className="row justify-content-between align-items-center">
                                    <div className="col-2">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619607719/Vitae/iconos/image_euso1q.png" alt="show" width="30" height="30"/>
                                        </Accordion.Toggle>
                                    </div>
                                    <div className="col-4">
                                        <h6>Usuario: {report.elder}</h6>
                                    </div>
                                    <div className="col-2">
                                        <h6>{(report.createdAt).split('T')[0].split("-").reverse().join("-")}</h6>
                                    </div>
                                    <div className="col-2">
                                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/editar_u5y3fw.png" id={report.id} alt="edit" className="mx-3 custom__img" width="20" height="20" onClick={editHandler}/>
                                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={report.id} alt="delete" className="mx-3 custom__img" width="20px"  height="20" onClick={deleteHandler}/>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <div className="row">
                                        <div className="col"></div>
                                    </div>
                                    <p className="custom__description">{report.description}</p>
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

export default MyReports;




