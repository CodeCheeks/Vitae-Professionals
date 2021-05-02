import './ProfessionalSection.css'

import React, { useEffect, useState } from 'react';

import { Spinner, Table } from 'react-bootstrap';
import { getUsersInfo } from "../../../../../services/UserService";


const ProfessionalSection = (props) => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        getUsersInfo()
        .then(res => setUsers(res))
        .catch(error => console.log(error))
    }, [])

    

    const getUsers =() => {
        let usersRow = []
        users.forEach(user => {
            if (user.occupation===props.department){
            usersRow.push(<tr key={user.id}>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.occupation}</td>
                <td>{user.email}</td>
                <td>✉️</td>
            </tr>)
            } 
        })
        return usersRow
    }

    return (
        <div className="container UsersList">
            { users ? 
            (<Table size="sm" bordered hover >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Email</th>
                        <th>Contactar</th>
                    </tr>
                </thead>
                <tbody>
                {getUsers()}
                </tbody>
            </Table>)
            :
            (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
            </Spinner>)}
        </div>
    );
};

export default ProfessionalSection;

