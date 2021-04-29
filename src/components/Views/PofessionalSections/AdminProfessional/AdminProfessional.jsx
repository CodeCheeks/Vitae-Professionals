import React from 'react';
import ProfessionalList from '../../Lists/ProfessionalList/ProfessionalList'
import { Link } from 'react-router-dom';

const CreateProfessional = () => {
    return (
        <div className='CreateProfessional container'>
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