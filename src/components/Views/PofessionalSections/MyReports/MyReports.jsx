import React, { useEffect, useContext, useState } from 'react';
import './MyReports.css'
import { UserContext } from "../../../../contexts/UserContext";
import { getReports, deleteReports } from "../../../../services/ReportsService";
import { Spinner } from 'react-bootstrap';
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
            <h1>Informes</h1>
            {
                reports ? 
                reports.length > 0 ?
                (reports.map(report => {
                    return(
                        <div key={report.id} className="container">
                            <div className="row justify-content-between border">

                                <div className="col-4 align-self-center">
                                    <h5>{report.title}</h5>
                                </div>
                                <div className="col-4 align-self-center">
                                    <h5>{report.id}</h5>
                                </div>
                                <div className="col-2">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/editar_u5y3fw.png" id={report.id} alt="edit" className="mx-3 custom__img" width="20px" onClick={editHandler}/>
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={report.id} alt="delete" className="mx-3 custom__img" width="20px" onClick={deleteHandler}/>
                                </div>  
                                
                            </div>
                        </div>
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




