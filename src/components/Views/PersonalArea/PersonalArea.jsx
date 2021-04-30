import React from 'react';
import EldersList from "../Elders/EldersList/EldersList"

import './PersonalArea.css'

const PersonalArea = () => {


   console.log(EldersList)

    return (
        <div className='PersonalArea'>
            <div className='container-fluid border-primary'>
                <div className='p__area__wrapper'>
                    <EldersList/> 
                </div> 
            </div>
        </div>
    );
};

export default PersonalArea;