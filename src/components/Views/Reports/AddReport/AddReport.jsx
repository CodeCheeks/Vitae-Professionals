import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../../contexts/UserContext';
import {addReport, getDataReport, editReport } from '../../../../services/ReportsService'
import { getElderInfoById } from '../../../../services/ElderService';


const AddReport = () => {
    const {elder_id, report_id} = useParams()
    const { user } = useContext(UserContext);
    const { push } = useHistory();
    const [dataReport, setdataReport] = useState(null);
    const [elder, setElder] = useState(null);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        if(elder_id){
            data.elder = elder_id
            data.professional = user.id
            addReport(data)
            .then(() => push(`/elders/${elder_id}`))
            .catch(e => console.log(e))
        }
        else{
            editReport(report_id, data)
            .then(() => push(`/personal-area`))
            .catch(e => console.log(e))
        }
    }

    useEffect(() => {
        report_id && getDataReport(report_id)
        .then(data => setdataReport(data))
        .catch(e => console.log(e)) 
    }, [report_id]);

    useEffect(() => {
        getElderInfoById(elder_id)
        .then(res => setElder(res))
        .catch(error => console.log(error))
    }, [ elder_id]);

    const getForm = () => {
        return(
            <div className="container">
                <div className="row py-2 my-5">
                    <div className="col-12">
                    {report_id ? 
                        <h1 className='text-center main__title'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034340/Vitae/iconos/document_f08uxb.png" className='mx-2  ' alt="reports" width='80'/>
                            { elder ? <h1>Editar Informe de {elder.firstname} {elder.lastname}</h1> : <Spinner animation="border" variant="info" />}
                        </h1> :
                        <h1 className='text-center main__title'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034340/Vitae/iconos/document_f08uxb.png" className='mx-2  ' alt="reports" width='80'/>
                            { elder ? <h1>Añadir Informe de {elder.firstname} {elder.lastname}</h1> : <Spinner animation="border" variant="info" />}
                        </h1>
                    }
                    </div>
                </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-10 col-12 border  p-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row justify-content-between mt-3">
                            <div className="col-7">
                                {elder ? <h6>{`Informe de ${elder.firstname}`}</h6> : <Spinner animation="border" variant="info" /> }
                                <h6>{`${user.firstname} ${user.lastname}, ${user.occupation}  `}</h6>
                            </div>
                            <div className="col-3">
                                <h6>{`Día: ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}</h6>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.title) && "is-invalid"} type="title" defaultValue={report_id && dataReport.title} placeholder="Título" {...register("title", { required: true })}/>
                                    {errors.title && <div className="invalid-feedback">Introduzca Título</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasicDescription">
                                    <Form.Control as="textarea" className={(errors.description && "is-invalid")} defaultValue={report_id && dataReport.description} style={{height: "250px"}} type="description" placeholder="description" 
                                    {...register("description", { required: true })}/>
                                    {errors.description && <div className="invalid-feedback">Introduzca la descripción</div>}
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
        report_id ? dataReport ?
        getForm()
        :
        (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
        </Spinner>)
        :
        getForm()
    );
};

export default AddReport;





