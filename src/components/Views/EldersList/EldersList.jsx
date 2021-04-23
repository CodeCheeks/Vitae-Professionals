import React, { useContext } from 'react';
import { ElderContext } from "../../../contexts/ElderContext"
import {Link} from 'react-router-dom'
import './EldersList.css'
const EldersList = () => {
    const { elders } = useContext(ElderContext);
    console.log('elders', elders)

    const groupColor = (group) => {
        if(group === 'red'){
            return 'col-1 list__items red'
        }else if(group === 'orange'){
            return 'col-1 list__items orange'  
        }else{
            return 'col-1 list__items green' 
        }
    }
    return (
        <div className='EldersList'>
            <div className="container">
                <div className='row border d-flex align-items-center justify-content-center'>
                    <h5 className=' col-2 list__items '>Elder Name</h5>
                    <h5 className='col-1 list__items '>Group</h5>
                    <h5 className=' col-2 list__items'>Birthday</h5>
                    <h5 className=' col-2 list__items'>Diet</h5>
                    <h5 className=' col-1 list__items'>Relative</h5>
                    <h5 className=' col-3 list__items'>Relative Phone</h5>
                </div>                 
            </div>
            { elders ? 
                (elders.map(elder => {
                    return <div key={elder.id}>
                            <div className='container'>
                                <div className='row border d-flex align-items-center justify-content-center'>
                                    <Link to={`/elders/${elder.id}`} className='col-2 list__items'>{elder.firstname} {elder.lastname}</Link>
                                    <p className={groupColor(elder.group)}>⬤</p>
                                    <p className=' col-2 list__items'>{elder.dateOfBirth.split('T')[0].split("-").reverse().join("-")}</p>
                                    <p className=' col-2 list__items'>{elder.diet}</p>
                                    <p className=' col-1 list__items'>{elder.relative.firstname} </p>
                                    <p className=' col-3 list__items'>{elder.relative.phonenumber}</p>
                                    
                                </div>
                            </div>

                    </div>
                })) : 
                (<h1>Loading...</h1>)}
            
        </div>
    );
};

export default EldersList;