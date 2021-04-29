import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import { UserContext } from "../../contexts/UserContext"
import ListActivities from '../Views/Activities/ListActivities/ListActivities'
import ElderProfile from '../Views/Elders/ElderProfile/ElderProfile'


//views

import Login from '../Views/Login/Login'
import NotFound from '../Views/NotFound/NotFound'
import PersonalArea from '../Views/PersonalArea/PersonalArea'
import AddProfessional from '../Views/PofessionalSections/AdminProfessional/AddProfesional'
import AdminProfessional from '../Views/PofessionalSections/AdminProfessional/AdminProfessional'
import CreateRelative from '../Views/PofessionalSections/CreateRelative/CreateRelative'
import MyAlbum from '../Views/PofessionalSections/MyAlbum/MyAlbum'
import MyMessages from '../Views/PofessionalSections/MyMessages/MyMessages'
import ListReports from '../Views/Reports/ListReports/ListReports'
import AddReport from '../Views/Reports/AddReport/AddReport'
import AddActivity  from '../Views/Activities/AddActivity/AddActivity'

const AppRouter = () => {

    const { user } = useContext(UserContext);
    
    
    
    return(

        <Switch>

            <Route exact path='/'><Login/></Route>
            
            <Route exact path="/login" >
                {user ? <PersonalArea/> : <Login/>}
            </Route>

            <Route exact path="/personal-area" >
                {!user ? <Login/> : <PersonalArea/>}
            </Route>

            <Route exact path="/elders/:id/" >
                {!user ? <Login/> : <ElderProfile />}
            </Route>  
            <Route exact path="/elders/:id/reports" >
                {!user ? <Login/> : <ListReports />}
            </Route>  

            <Route exact path="/elders/:elder_id/add-reports" >
                {!user ? <Login/> : <AddReport />}
            </Route>  

            <Route exact path="/elders/edit-report/:report_id" >
                {!user ? <Login/> : <AddReport />}
            </Route>  

            <Route exact path="/personal-area/reports" >
                {!user ? <Login/> : <ListReports/>}
            </Route>

            <Route exact path="/personal-area/activities" >
                {!user ? <Login/> : <ListActivities/>}
            </Route>
            
            <Route exact path="/personal-area/activities/addActivity" >
                {!user ? <Login/> : <AddActivity/>}
            </Route>

            <Route exact path="/personal-area/editActivity/:activity_id" >
                {!user ? <Login/> : <AddActivity/>}
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
            <Route exact path="/personal-area/adminProfessional" >
                {!user ? <Login/> : <AdminProfessional/>}
            </Route>
            <Route exact path="/personal-area/adminProfessional/addProfessional" >
                {!user ? <Login/> : <AddProfessional/>}
            </Route>
            <Route exact path="/personal-area/adminProfessional/editProfessional/:professional_id" >
                {!user ? <Login/> : <AddProfessional/>}
            </Route>
            
            <Route component={NotFound} />
        </Switch>

    )
}

export default AppRouter