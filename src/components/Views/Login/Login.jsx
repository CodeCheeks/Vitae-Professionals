import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='Login'>
            
           <div className='nav__decoration'>
            <p>Vitae para profesionales</p>
            </div>     
            <form className='login__form'>
            
                <div className="email__input__wrapper">
                    <label htmlFor="exampleInputEmail1" className="form-label d-flex flex-start ">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="email__input__wrapper">
                    <label htmlFor="exampleInputPassword1" className="form-label d-flex flex-start">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary d-flex flex-start">Submit</button>
                <label htmlFor="exampleInputPassword1" className="form-label login__form__title">Si ha olvidado sus credenciales contacte con el departamento de IT</label>
                </form>
            
        </div>
    );
};

export default Login;