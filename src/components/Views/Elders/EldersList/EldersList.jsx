import React, { useContext } from 'react';
import { ElderContext } from "../../../../contexts/ElderContext"
import {Link} from 'react-router-dom'
import './EldersList.css'
import { Spinner } from 'react-bootstrap';

const EldersList = () => {
    const { elders } = useContext(ElderContext);
    

    const groupColor = (group) => {
        if(group === 'Rojo'){
            return 'col-1 list__items red'
        }else if(group === 'Naranja'){
            return 'col-1 list__items orange'  
        }else{
            return 'col-1 list__items green' 
        }
    }

    
    return (
        <div className='EldersList'>
            <div className="container">
                <div className='row border d-flex align-items-center justify-content-center'>
                    <h5 className='col-6 col-md-5 col-lg-3 list__items '>Elder Name</h5>
                    <h5 className='col-lg-2 list__items hide__element'>Group</h5>
                    <h5 className=' col-lg-3 list__items hide__element'>Birthday</h5>
                    <h5 className=' col-1 col-md-1 col-lg-1 list__items mr-5'>Relative</h5>
                    <h5 className=' col-2 col-md-1 col-lg-2 list__items'>Phone</h5>
                </div>                 
            </div>
            { elders ? 
                (elders.map(elder => {
                    return <div key={elder.id}>
                            <div className='container'>
                                <div className='row border d-flex align-items-center justify-content-center'>
                                    <Link to={`/elders/${elder.id}`} className='col-4 col-md-2 col-lg-3 list__items'>{elder.firstname} {elder.lastname}</Link>
                                    <p className='col-2 d-flex'> <span className={groupColor(elder.group)}>⬤</span></p>
                                    <p className=' col-3 list__items hide__element'>{elder.dateOfBirth.split('T')[0].split("-").reverse().join("-")}</p>
                                    <p className=' col-1 list__items'>{elder.relative.firstname} </p>
                                    <p className=' col-2 list__items ml-5'>{elder.relative.phonenumber}</p>
                                    
                                </div>
                            </div>

                    </div>
                })) : 

                <Spinner className="m-5" animation="border" role="status" variant="info">
                    <span className="sr-only">Loading...</span>
                 </Spinner>
                }
        </div>
    );
};


export default EldersList;