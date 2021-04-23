import React, { useContext } from 'react';
import { UserContext } from "../../../contexts/UserContext"
import EldersList from "../EldersList/EldersList"
import LateralBar from '../ProfessionalsBars/LateralBar';
import TopBar from '../ProfessionalsBars/TopBar';
import './PersonalArea.css'
const PersonalArea = () => {

    const { user } = useContext(UserContext);
    const {firstname, lastname, phonenumber, occupation, email} = user
   console.log(EldersList)

    return (
        <div className='PersonalArea'>
           <TopBar/>
            
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