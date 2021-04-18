import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


//views

import Login from '../Views/Login/Login'
import NotFound from '../Views/NotFound/NotFound'


const AppRouter = () => {


    return(
        <Switch>
            <Route exact path='/'><Redirect to ='/login'/></Route>
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default AppRouter