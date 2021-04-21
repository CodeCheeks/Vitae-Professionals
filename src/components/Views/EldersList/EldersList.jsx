import React, { useContext } from 'react';
import { ElderContext } from "../../../contexts/ElderContext"
import {Link} from 'react-router-dom'
const EldersList = () => {
    const { elders } = useContext(ElderContext);
    console.log('elders', elders)
    return (
        <div className='EldersList'>
            { elders ? elders.map(elder => {
            return <div key={elder.id}>
                        <Link to={`/elders/${elder.id}`} >{elder.firstname}</Link>
                    </div>
        }) : <h1>Loading...</h1>}
            
        </div>
    );
};

export default EldersList;