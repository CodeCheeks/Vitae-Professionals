import React from 'react';
import LateralBar from '../../ProfessionalsBars/LateralBar';
import CustomNavbar from '../../../CustomNavbar/CustomNavbar';
import "./AdminElders.css"

const AdminElders = () => {
    return (
        <div ClassName='AdminElders'>
            <CustomNavbar/>
            <LateralBar/>
            <h1>Administrar abuelos</h1>
        </div>
    );
};

export default AdminElders;