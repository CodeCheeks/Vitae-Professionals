import React, { useContext } from 'react';
import { ElderContext } from "../../../contexts/ElderContext"
import {Link} from 'react-router-dom'
const EldersList = () => {
    const { elders } = useContext(ElderContext);
    console.log('elders', elders)

    return (
        <div className='EldersList'>
            
            { elders ? 
                (elders.map(elder => {
                    return <div key={elder.id}>
                            <div className='container-fluid'>
                                <div className='row border'>
                                    <Link to={`/elders/${elder.id}`} className='col-2'>{elder.firstname} {elder.lastname}</Link>
                                    <div className='row'>
                                    <p className='mx-2 col-1'>{elder.group}</p>
                                    <p className='mx-2 col-2'>{elder.dateOfBirth.split('T')[0].split("-").reverse().join("-")}</p>
                                    <p className='mx-2 col-1'>{elder.diet}</p>
                                    <p className='mx-2 col-2'>Relative:{elder.relative.firstname} </p>
                                    <p className='mx-2 col-4'>Contact:{elder.relative.phonenumber}</p>
                                </div>
                            </div>
                            </div>

                    </div>
                })) : 
                (<h1>Loading...</h1>)}
            
        </div>
    );
};

export default EldersList;