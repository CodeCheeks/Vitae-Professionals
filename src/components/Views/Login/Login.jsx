
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { useHistory } from 'react-router';
import { useUser } from '../../../hooks/useUser';
import { login } from '../../../services/AuthService';
import { setAccessToken } from '../../../store/AccessTokenStore';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { push } = useHistory();
    const { getUser: doLogin } = useUser();
    const [authError, setAuthError] = useState(false)

    const onSubmit = (data) => {
        setAuthError(false)
        login(data)
        .then((response) => {
            setAccessToken(response.access_token);
            doLogin().then(() => push("/personal-area"));
        })
        .catch(error => {
            setAuthError(true)
        })
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-8 border m-5 p-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className={(errors.email || authError) && "is-invalid"} type="email" placeholder="Email" {...register("email", { required: true })}/>
                            {errors.email && <div className="invalid-feedback">Introduzca email</div>}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className={(errors.password || authError) && "is-invalid"} type="password" placeholder="Password" 
                            {...register("password", { required: true })}/>
                            {errors.password && <div className="invalid-feedback">Introduzca la contraseña</div>}
                            {authError && !errors.password && <div className="invalid-feedback">Contraseña o email incorrectos</div>}
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
       
    );
};


export default Login
