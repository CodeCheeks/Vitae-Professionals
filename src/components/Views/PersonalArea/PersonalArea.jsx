import React from 'react';
import EldersList from "../Elders/EldersList/EldersList"
import LateralBar from '../ProfessionalsBars/LateralBar';
import './PersonalArea.css'

const PersonalArea = () => {


   console.log(EldersList)

    return (
        <div className='PersonalArea'>
            <div className='container-fluid border-primary'>
                <div className='p__area__wrapper'>
                    <LateralBar/>
                    <EldersList/> 
                </div> 
            </div>
        </div>
    );
};

export default PersonalArea;