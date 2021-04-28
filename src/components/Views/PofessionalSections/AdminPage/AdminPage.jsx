import React from 'react';
import LateralBar from '../../ProfessionalsBars/LateralBar';
import CustomNavbar from '../../../CustomNavbar/CustomNavbar';
import "./AdminPage.css"

const MyAlbum = () => {
    return (
        <div ClassName='MyAlbum'>
            <CustomNavbar/>
            <LateralBar/>
            <h1>Administrator area</h1>
            <p>CRUD ABUELOS</p>
            <p>CRUD PERSONAL</p>
        </div>
    );
};

export default MyAlbum;