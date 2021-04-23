import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ElderContextProvider } from '../../contexts/ElderContext'
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
        
        <ElderContextProvider>
            <Switch>
                {/* External Routes */}
                <Route exact path='/'><Redirect to ='/personal-area'/></Route>
                <Route exact path="/login" >
                    {user ? <Redirect to="/personal-area" /> : <Login/>}
                </Route>
                {/* Personal Area */}
                <Route exact path="/personal-area" >
                    {!user ? <Redirect to="/login" /> : <PersonalArea/>}
                </Route>
                {/* Elder profile */}
                <Route exact path="/elders/:id" >
                    {!user ? <Redirect to="/login" /> : <ElderProfile />}
                </Route>  
                {/* Professional sections */}
                <Route exact path="/personal-area/reports" >
                    {!user ? <Redirect to="/login" /> : <MyReports/>}
                </Route>
                <Route exact path="/personal-area/activities" >
                    {!user ? <Redirect to="/login" /> : <MyActivities/>}
                </Route>
                <Route exact path="/personal-area/album" >
                    {!user ? <Redirect to="/login" /> : <MyAlbum/>}
                </Route>
                <Route exact path="/personal-area/messages" >
                    {!user ? <Redirect to="/login" /> : <MyMessages/>}
                </Route>
                <Route exact path="/personal-area/newRelative" >
                    {!user ? <Redirect to="/login" /> : <CreateRelative/>}
                </Route>
                <Route exact path="/personal-area/newProfessional" >
                    {!user ? <Redirect to="/login" /> : <CreateProfessional/>}
                </Route>
                
                <Route component={NotFound} />
            </Switch>
        </ElderContextProvider>
    )
}

export default AppRouter