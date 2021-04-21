import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ElderContextProvider } from '../../contexts/ElderContext'
import { UserContext } from "../../contexts/UserContext"

//views

import Login from '../Views/Login/Login'
import NotFound from '../Views/NotFound/NotFound'
import PersonalArea from '../Views/PersonalArea/PersonalArea'


const AppRouter = () => {

    const { user } = useContext(UserContext);
    console.log(user)
    
    return(
        
        <ElderContextProvider>
            <Switch>
                <Route exact path='/'><Redirect to ='/personal-area'/></Route>
                <Route exact path="/login" >
                    {user ? <Redirect to="/personal-area" /> : <Login/>}
                </Route>
                <Route exact path="/personal-area" >
                    {!user ? <Redirect to="/login" /> : <PersonalArea/>}
                </Route>
                
                <Route component={NotFound} />
            </Switch>
        </ElderContextProvider>
    )
}

export default AppRouter