import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { UserContext } from "../../contexts/UserContext"

//views

import Login from '../Views/Login/Login'
import NotFound from '../Views/NotFound/NotFound'
import PersonalArea from '../Views/PersonalArea/PersonalArea'


const AppRouter = () => {

    const { user } = useContext(UserContext);

    return(
        <Switch>
            <Route exact path='/'><Redirect to ='/login'/></Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/personal-area" component={PersonalArea}>
                {!user ? <Redirect to="/login" /> : <PersonalArea/>}
            </Route>
            
            <Route component={NotFound} />
        </Switch>
    )
}

export default AppRouter