import React from 'react';
import './AdminProfessional.css'
import ProfessionalList from '../Lists/ProfessionalList/ProfessionalList'
import { Link } from 'react-router-dom';

const CreateProfessional = () => {
    return (
        <div className='CreateProfessional'>
           <ProfessionalList/> 
           <Link to ='/personal-area/adminProfessional/addProfessional'><button className='btn-primary'>Add new professional</button></Link>
        </div>
    );
};

export default CreateProfessional;