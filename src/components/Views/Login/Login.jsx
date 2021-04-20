import './Login.css'
import  { useState } from 'react';
import { useHistory } from 'react-router';
import { useUser } from '../../../hooks/useUser';
import { login } from '../../../services/AuthService';
import { setAccessToken } from '../../../store/AccessTokenStore'

// eslint-disable-next-line no-useless-escape
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const validators = {
    email: (value) => {
      let message;
  
      if (!value) {
        message = "Email is required";
      } else if (!EMAIL_PATTERN.test(value)) {
        message = "Email is invalid";
      }
  
      return message;
    },
    password: (value) => {
      let message;
  
      if (!value) {
        message = "Password is required";
      } else if (value && value.length < 8) {
        message = "Incorrect password";
      }
  
      return message;
    },
  }

const Login = () => {
    const { push } = useHistory();
    const { getUser: doLogin } = useUser();

    const [state, setState] = useState({
        fields: {
          email: "",
          password: "",
        },
        errors: {
          email: validators.email(),
          password: validators.password(),
        },
      });
    
    const [touched, setTouched] = useState({});

    const isValid = () => {
        const { errors } = state;
        return !Object.keys(errors).some((error) => errors[error]);
    };

    const onSubmit = (e) => {
        const { fields } = state;
        e.preventDefault();
    
        if (isValid()) {
          login(fields).then((response) => {
            setAccessToken(response.access_token);
            doLogin().then(() => push("/personal-area"));
          });
        }
      };
    
      const onChange = (e) => {
        const { name, value } = e.target;
    
        setState((prevState) => ({
          fields: {
            ...prevState.fields,
            [name]: value,
          },
          errors: {
            ...prevState.errors,
            [name]: validators[name] && validators[name](value),
          },
        }));
      };
    
      const onBlur = (e) => {
        const { name } = e.target;
    
        setTouched((prevTouched) => ({
          ...prevTouched,
          [name]: true,
        }));
      };
    
      const onFocus = (e) => {
        const { name } = e.target;
    
        setTouched((prevTouched) => ({
          ...prevTouched,
          [name]: false,
        }));
      };

    const { email, password } = state.fields;
    const { errors } = state;
    return (
        <div className='Login'>
            
           <div className='nav__decoration'>
            <p>Vitae para profesionales</p>
            </div>     
            <form className='login__form' onSubmit={onSubmit}>
            
                <div className="email__input__wrapper">
                    <label htmlFor="email" className="form-label d-flex flex-start ">Email address</label>
                    <input className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}/>
                </div>
                <div className="invalid-feedback">{errors.email==="Email is required" ?  "Email is required" : "Email is invalid"}</div>
                <div className="email__input__wrapper">
                    <label htmlFor="password" className="form-label d-flex flex-start">Password</label>
                    <input 
                        className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}/>
                        <div className="invalid-feedback">{errors.password==="Password is required" ?  "Password is required" : "Incorrect password"}</div>
                </div>
                <button type="submit" className="btn btn-primary d-flex flex-start" disabled={!isValid()}>Submit</button>
                <label htmlFor="exampleInputPassword1" className="form-label login__form__title">Si ha olvidado sus credenciales contacte con el departamento de IT</label>
                </form>
            
        </div>
    );
};

export default Login
  