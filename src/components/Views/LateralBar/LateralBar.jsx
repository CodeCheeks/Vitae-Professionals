import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import  './LateralBar.css'

import { UserContext } from "../../../contexts/UserContext"

const LateralBar = () => {

    const { user } = useContext(UserContext);
    
    return (
        <div className='LateralBar '>
            <div className="container   ">
            <div className="row">
                    <Link to={"/personal-area"} className='col l__bar__item'>Listado de usuarios</Link>
                </div>
                <div className="row">
                    <Link to={"/personal-area/reports"} className='col l__bar__item'>Mis informes</Link>
                </div>
                <div className="row">
                    <Link to={"/personal-area/activities"} className='col l__bar__item'>Mis Actividades</Link>
                </div> 
                <div className="row">
                    <Link to={"/personal-area/messages"} className='col l__bar__item'>Mis mensajes</Link>
                </div> 
                
                <div className="row">
                    {user.admin && <Link to={"/personal-area/newElder"} className='col l__bar__item'>Crear Nueva alta</Link>}
                </div>
                <div className="row">
                    {user.admin && <Link to={"/personal-area/adminProfessionals"} className='col l__bar__item'>Administrar Profesionales</Link>}
                </div>  
                <div className="row">
                    {user.admin && <Link to={"/personal-area/adminElders"} className='col l__bar__item'>Administrar Usuarios</Link>}
                </div>   
            </div>
        </div>
    );
};

export default LateralBar;