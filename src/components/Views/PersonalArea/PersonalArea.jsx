import React, { useContext } from 'react';
import { UserContext } from "../../../contexts/UserContext"

const PersonalArea = () => {

    const { user } = useContext(UserContext);
    const {firstname, lastname, phonenumber, occupation, email} = user

    return (
        <div className='PersonalArea'>
           <h1>Area Personal</h1>
            <h3>Welcome {firstname}</h3>
        </div>
    );
};

export default PersonalArea;