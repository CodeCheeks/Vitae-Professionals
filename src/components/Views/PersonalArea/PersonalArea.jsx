import React, { useContext } from 'react';
import { UserContext } from "../../../contexts/UserContext"
import EldersList from "../EldersList/EldersList"
const PersonalArea = () => {

    const { user } = useContext(UserContext);
    const {firstname, lastname, phonenumber, occupation, email} = user
   console.log(EldersList)

    return (
        <div className='PersonalArea'>
           <h1>Area Personal</h1>

            <h3>Welcome {firstname}</h3>
            <div className='container border-primary'>
                <h5>Your elders</h5>
                <EldersList/>
            </div>
            
        </div>
    );
};

export default PersonalArea;