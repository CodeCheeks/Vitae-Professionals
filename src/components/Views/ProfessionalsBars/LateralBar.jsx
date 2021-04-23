import React from 'react';
import {Link} from 'react-router-dom'
import  './LateralBar.css'
const LateralBar = () => {
    return (
        <div className='LateralBar'>
            <div className="container lateral__bar">
                <div className="row">
                    <Link to={"/#"} className='col l__bar__item'>Mis informes</Link>
                </div>
                <div className="row">
                    <Link to={"/#"} className='col l__bar__item'>Mis Actividades</Link>
                </div> 
                <div className="row">
                    <Link to={"/#"} className='col l__bar__item'>Mi album</Link>
                </div> 
                <div className="row">
                    <Link to={"/#"} className='col l__bar__item'>Mis mensajes</Link>
                </div> 
                <div className="row">
                    <Link to={"/#"} className='col l__bar__item'>Crear Nueva alta</Link>
                </div>
                <div className="row">
                    <Link to={"/#"} className='col l__bar__item'>Crear profesional</Link>
                </div>    
            </div>
        </div>
    );
};

export default LateralBar;