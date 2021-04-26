import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import { Redirect, Route, Switch } from 'react-router-dom'

import { UserContext } from "../../contexts/UserContext"
import ElderProfile from '../Views/Elders/ElderProfile/ElderProfile'


//views

import Login from '../Views/Login/Login'
import NotFound from '../Views/NotFound/NotFound'
import PersonalArea from '../Views/PersonalArea/PersonalArea'
import CreateProfessional from '../Views/PofessionalSections/CreateProfessional/CreateProfessional'
import CreateRelative from '../Views/PofessionalSections/CreateRelative/CreateRelative'
import MyActivities from '../Views/PofessionalSections/MyActivities/ActivitiesList/ActivitiesList'
import MyAlbum from '../Views/PofessionalSections/MyAlbum/MyAlbum'
import MyMessages from '../Views/PofessionalSections/MyMessages/MyMessages'
import MyReports from '../Views/PofessionalSections/MyReports/MyReports'

const AppRouter = () => {

    const { user } = useContext(UserContext);
    
    
    
    return(

        //<Spinner animation="border" role="status" variant="info"/>

        <Switch>

            <Route exact path='/'><Login/></Route>
            
            <Route exact path="/login" >
                {user ? <PersonalArea/> : <Login/>}
            </Route>

            <Route exact path="/personal-area" >
                {!user ? <Login/> : <PersonalArea/>}
            </Route>

            <Route exact path="/elders/:id" >
                {!user ? <Login/> : <ElderProfile />}
            </Route>  

            <Route exact path="/personal-area/reports" >
                {!user ? <Login/> : <MyReports/>}
            </Route>
            <Route exact path="/personal-area/activities" >
                {!user ? <Login/> : <MyActivities/>}
            </Route>
            <Route exact path="/personal-area/album" >
                {!user ? <Login/> : <MyAlbum/>}
            </Route>
            <Route exact path="/personal-area/messages" >
                {!user ? <Login/> : <MyMessages/>}
            </Route>
            <Route exact path="/personal-area/newRelative" >
                {!user ? <Login/> : <CreateRelative/>}
            </Route>
            <Route exact path="/personal-area/newProfessional" >
                {!user ? <Login/> : <CreateProfessional/>}
            </Route>
            
            <Route component={NotFound} />
        </Switch>

    )
}

export default AppRouter