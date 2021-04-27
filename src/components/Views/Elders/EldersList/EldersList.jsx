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
                    <h5 className=' col-2 list__items '>Nombre</h5>
                    <h5 className='col-1 list__items '>Grupo</h5>
                    <h5 className=' col-2 list__items'>Edad</h5>
                    <h5 className=' col-1 list__items mr-5'>Familiar</h5>
                    <h5 className=' col-3 list__items'>Teléfono</h5>
                </div>                 
            </div>
            { elders ? 
                (elders.map(elder => {
                    return <div key={elder.id}>
                            <div className='container'>
                                <div className='row border d-flex align-items-center justify-content-center'>
                                    <Link to={`/elders/${elder.id}`} className='col-2 list__items'>{elder.firstname} {elder.lastname}</Link>
                                    <p className={groupColor(elder.group)}>⬤</p>
                                    <p className=' col-2 list__items'>{elder.age}</p>
                                    <p className=' col-1 list__items'>{elder.relative.firstname} </p>
                                    <p className=' col-3 list__items ml-5'>{elder.relative.phonenumber}</p>
                                    
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