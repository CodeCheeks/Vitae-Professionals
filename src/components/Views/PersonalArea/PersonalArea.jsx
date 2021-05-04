import React from 'react';
import EldersList from "../Elders/EldersList/EldersList"

import './PersonalArea.css'

const PersonalArea = () => {


    return (
        <div className='PersonalArea'>
            <div className='container-fluid border-primary'>
            <div className="row mt-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034340/Vitae/iconos/document_f08uxb.png" className='mx-2  ' alt="reports" width='80'/>
                        Listado de usuarios
                    </h1>
                </div>
            </div>
                <div className='p__area__wrapper'>
                    <EldersList/> 
                </div> 
            </div>
        </div>
    );
};

export default PersonalArea;