import React from 'react';
import ProfessionalList from '../../Lists/ProfessionalList/ProfessionalList'
import { Link } from 'react-router-dom';

const CreateProfessional = () => {
    return (
        <div className='CreateProfessional container'>
            <div className="row my-5">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620144743/Vitae/iconos/informacion-personal_askbdn.png" className='mx-2  ' alt="reports" width='80'/>
                        Administrar Personal
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ProfessionalList/> 
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <Link to ='/personal-area/adminProfessional/addProfessional'><button className='btn-primary'>Añadir nuevo profesional</button></Link>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <Link to ='/personal-area/adminProfessional/adminCandidates'><button className='btn-primary'>Ver candidaturas</button></Link>               
                </div> 
            </div>

        </div>
    );
};

export default CreateProfessional;