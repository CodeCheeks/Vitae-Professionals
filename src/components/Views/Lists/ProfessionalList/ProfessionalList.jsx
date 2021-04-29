
import React, { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom'
import './ProfessionalList.css'
import { Spinner, Table } from 'react-bootstrap';
import { getUsersInfo, deleteUser } from "../../../../services/UserService";




const UsersList = () => {
    
    const [users, setUsers] = useState(null)

    const deleteHandler = ((e) => {
        console.log(e.target.id)
        deleteUser(e.target.id)
        .then(res => {
            let updatedUsers = users.filter(user => user.id !== e.target.id)
            setUsers(updatedUsers)
        })
        .catch(e => console.log(e))  
    })

    useEffect(() => {
        getUsersInfo()
        .then(res => setUsers(res))
        .catch(error => console.log(error))
    }, [])

    

    const getUsers =() => {
        let usersRow = []
        users.forEach(user => {
            usersRow.push(<tr key={user.id}>
               
                <td>{user.firstname}</td>
                <td>{user.occupation}</td>
                <td>{user.email}</td>
                <td>{user.admin ? <p>Si</p> : <p>No</p>}</td>
                <td>{user.phonenumber}</td>
                <td>
                <NavLink className='link__style'to={`/personal-area/adminProfessional/editProfessional/${user.id}`}>
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/editar_u5y3fw.png" id={user.id} alt="edit" className="mx-3 custom__img" width="20px" />
                </NavLink>
                </td>
                <td><img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619462590/Vitae/iconos/borrar_eoyvyu.png" id={user.id} alt="delete" className="mx-3 custom__img" width="20px" onClick={deleteHandler}/></td>
            </tr>)
        })
        return usersRow
    }

    return(
        <div className="container UsersList">
            <div className='row'>
            <h2 className='col-12 my-2 py-2'>Administración de personal</h2>
            </div>
            
            { users ? 
            (<Table size="sm" bordered hover >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Email</th>
                        <th>Administrador</th>
                        <th>Teléfono</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
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
    )
};


export default UsersList;