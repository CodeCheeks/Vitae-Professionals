import React, { useContext } from 'react';
import './MyReports.css'
import { UserContext } from "../../../../contexts/UserContext";
import {deleteReports} from '../../../../services/ReportsService'

const MyReports = () => {

    const { user } = useContext(UserContext);

    const editHandler = (e) => {
        console.log("click edit")
       
    }
    const deleteHandler = (e) => {
        deleteReports(e.target.id)
        .then(res => {
            console.log("deleted")

        })
        .catch(e => console.log(e))
    }

    const getReports = () => {
        let reports = []
        user.reports.forEach(report => {
            reports.push(
                <div key={report} className="container">
                    <div className="row border">
                        <div className="col-10 align-self-center">
                            <h5>{report}</h5>
                        </div>
                        <div className="col-2">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/editar_u5y3fw.png" id={report} alt="edit" className="mx-3 custom__img" width="20px" onClick={editHandler}/>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={report} alt="delete" className="mx-3 custom__img" width="20px" onClick={deleteHandler}/>
                        </div>  
                    </div>
                </div>
            )
        })
        return reports
    }


    return (
        <div className="container">
            <h1>Informes</h1>
            <h3>{getReports()}</h3>
        </div>
    );
};

export default MyReports;



