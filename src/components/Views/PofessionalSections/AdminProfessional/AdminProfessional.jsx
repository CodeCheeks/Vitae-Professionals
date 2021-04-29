import React from 'react';
import './AdminProfessional.css'
import ProfessionalList from '../Lists/ProfessionalList/ProfessionalList'
import { Link } from 'react-router-dom';

const CreateProfessional = () => {
    return (
        <div className='CreateProfessional'>
           <ProfessionalList/> 
           <Link to ='/personal-area/adminProfessional/addProfessional'>Add new professional</Link>
        </div>
    );
};

export default CreateProfessional;