import React from 'react';
import {Link} from 'react-router-dom'
import  './LateralBar.css'
const LateralBar = () => {
    return (
        <div className='LateralBar'>
            <div className="container lateral__bar d-flex flex-column justify-content-center ">
                <div className="row">
                    <Link to={"/personal-area/reports"} className='col l__bar__item'>Mis informes</Link>
                </div>
                <div className="row">
                    <Link to={"/personal-area/activities"} className='col l__bar__item'>Mis Actividades</Link>
                </div> 
                <div className="row">
                    <Link to={"/personal-area/album"} className='col l__bar__item'>Mi album</Link>
                </div> 
                <div className="row">
                    <Link to={"/personal-area/messages"} className='col l__bar__item'>Mis mensajes</Link>
                </div> 
                <div className="row">
                    <Link to={"/personal-area/newRelative"} className='col l__bar__item'>Crear Nueva alta</Link>
                </div>
                <div className="row">
                    <Link to={"/personal-area/newProfessional"} className='col l__bar__item'>Crear profesional</Link>
                </div>    
            </div>
        </div>
    );
};

export default LateralBar;