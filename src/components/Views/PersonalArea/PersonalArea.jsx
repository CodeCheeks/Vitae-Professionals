import React, { useContext } from 'react';
import { ElderContext } from '../../../contexts/ElderContext';
import { UserContext } from "../../../contexts/UserContext"
import EldersList from "../Elders/EldersList/EldersList"
import LateralBar from '../ProfessionalsBars/LateralBar';
import './PersonalArea.css'

const PersonalArea = () => {

    const { user } = useContext(UserContext);
    const { elders } = useContext(ElderContext)
    const {firstname, lastname, phonenumber, occupation, email} = user
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