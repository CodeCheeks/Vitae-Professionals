import React, { useContext } from 'react';
import { UserContext } from "../../../contexts/UserContext"
import {Link} from 'react-router-dom'
const EldersList = () => {
    const { elders } = useContext(UserContext);

    return (
        <div className='EldersList'>
            {elders.map(elder => {
            return <div key={elder.id}>
                        <Link to={`/elders/${elder.id}`} >{elder.firstname}</Link>
                    </div>
        })}
        </div>
    );
};

export default EldersList;