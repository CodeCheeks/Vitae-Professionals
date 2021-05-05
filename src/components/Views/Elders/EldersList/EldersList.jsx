import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom'
import './EldersList.css'
import { Spinner, Table } from 'react-bootstrap';
import { getEldersInfo } from "../../../../services/ElderService";

const EldersList = () => {

    const [elders, setElders] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState(null);
    
    useEffect(() => {
        getEldersInfo()
        .then(res => setElders(res))
        .catch(error => console.log(error))
    }, []);

    //SORT BY
    const sortByName = () => {
        setSort("byABCfirst")
        if(sort!=="byABCfirst"){
            setElders(elders.sort((a, b) => 
            {
                if(a.firstname < b.firstname) { return -1; }
                if(a.firstname > b.firstname) { return 1; }
                return 0;
            }))
        }
        else {
            setElders(elders.sort((a, b) => 
            {
                if(b.firstname < a.firstname) { return -1; }
                if(b.firstname > a.firstname) { return 1; }
                return 0;
            }))
            setSort("byXYZfirst")
        }
    }

    const sortByAge = () => {
        setSort("highFirst")
        if(sort!=="highFirst"){
            setElders(elders.sort((a, b) => b.age - a.age))
        }
        else {
            setSort("lowFirst")
            setElders(elders.sort((a, b) => a.age - b.age))
        }
        
    }

    //FILTER WITH SEARCH BAR

    const editSearchTerm = (e) => {
        setSearchTerm( e.target.value)
      }

    const dynamicSearch = () => {
    return elders.filter(elder => elder.firstname.toLowerCase().includes(searchTerm.toLowerCase()))
    }


    //GET ELDERS
    const getElders =() => {

        let eldersRow = []
        dynamicSearch().map(elder => {
            return eldersRow.push(<tr key={elder.id}>
                <td><Link to={`/elders/${elder.id}`} className='col-2 list__items'>{elder.firstname} {elder.lastname}</Link></td>
                <td className={((elder.group) === 'Rojo') ? 'red' : ((elder.group) === 'Naranja') ? 'orange' : 'green'}>⬤</td>
                <td>{elder.age}</td>
                <td>{elder.relative.firstname}</td>
                <td>{elder.relative.phonenumber}</td>
            </tr>)
            
        })
        return eldersRow
    }


    return(
        <div className="container EldersList">
            <div className="row">
                <div className="col-12">
                    <input className='my-5 form-control input-lg' type= 'text' value ={searchTerm} onChange = {editSearchTerm } placeholder = 'Buscar por nombre' autoComplete="on"/>
                </div>
            </div>
            { elders ? 
            (<Table size="sm" bordered hover >
                <thead>
                    
                    <tr>
                        <th> <button className="custom__button__style" onClick={sortByName}>Nombre</button> </th>
                        <th>Grupo</th>
                        <th><button className="custom__button__style" onClick={sortByAge}>Edad</button></th>
                        <th>Familiar</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                
                {getElders()}
                </tbody>
            </Table>)
            :
            (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
            </Spinner>)}
        </div>
    )
};


export default EldersList;