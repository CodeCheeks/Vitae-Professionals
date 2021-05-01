import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import { UserContext } from "../../contexts/UserContext"
import ListActivities from '../Views/Activities/ListActivities/ListActivities'
import ElderProfile from '../Views/Elders/ElderProfile/ElderProfile'
import CandidatesList from '../Views/Lists/CandidatesList/CandidatesList'


//views

import Login from '../Views/Login/Login'
import NotFound from '../Views/NotFound/NotFound'
import PersonalArea from '../Views/PersonalArea/PersonalArea'
import AddProfessional from '../Views/PofessionalSections/AdminProfessional/AddProfesional'
import AdminProfessional from '../Views/PofessionalSections/AdminProfessional/AdminProfessional'
import CreateElder from '../Views/PofessionalSections/CreateElder/CreateElder'
import MyAlbum from '../Views/PofessionalSections/MyAlbum/MyAlbum'
import MyMessages from '../Views/PofessionalSections/MyMessages/MyMessages'
import ListReports from '../Views/Reports/ListReports/ListReports'
import AddReport from '../Views/Reports/AddReport/AddReport'
import AddActivity  from '../Views/Activities/AddActivity/AddActivity'
import AdminElders from '../Views/PofessionalSections/AdminElders/AdminElders'
import ElderActivity from '../Views/Activities/ElderActivity/ElderActivity'
import Nursing from '../Views/PofessionalSections/Sections/Nursing/Nursing'
import Medicine from '../Views/PofessionalSections/Sections/Medicine/Medicine'
import Physiotherapy from '../Views/PofessionalSections/Sections/Physiotherapy/Physiotherapy'
import Therapy from '../Views/PofessionalSections/Sections/Therapy/Therapy'
import Animation from '../Views/PofessionalSections/Sections/Animation/Animation'
import SocialWork from '../Views/PofessionalSections/Sections/SocialWork/SocialWork'


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

            <Route exact path="/elders/actividades/:id" >
                {!user ? <Login/> : <ElderActivity />}
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

            <Route exact path="/personal-area/enfermeria" >
                {!user ? <Login/> : <Nursing/>}
            </Route>

            <Route exact path="/personal-area/medicina" >
                {!user ? <Login/> : <Medicine/>}
            </Route>

            <Route exact path="/personal-area/fisioterapia" >
                {!user ? <Login/> : <Physiotherapy/>}
            </Route>

            <Route exact path="/personal-area/terapia-ocupacional" >
                {!user ? <Login/> : <Therapy/>}
            </Route>

            <Route exact path="/personal-area/animación" >
                {!user ? <Login/> : <Animation/>}
            </Route>

            <Route exact path="/personal-area/trabajo-social" >
                {!user ? <Login/> : <SocialWork/>}
            </Route>

            <Route exact path="/personal-area/album" >
                {!user ? <Login/> : <MyAlbum/>}
            </Route>
            <Route exact path="/personal-area/messages" >
                {!user ? <Login/> : <MyMessages/>}
            </Route>
            <Route exact path="/personal-area/newElder" >
                {!user ? <Login/> : user.admin ? <CreateElder/> : <PersonalArea/>}
            </Route>
            <Route exact path="/personal-area/adminProfessionals" >
                {!user ? <Login/> : user.admin ? <AdminProfessional/> : <PersonalArea/>}
            </Route>
            <Route exact path="/personal-area/adminProfessional/addProfessional" >
                {!user ? <Login/> : user.admin ? <AddProfessional/> : <PersonalArea/>}
            </Route>
            <Route exact path="/personal-area/adminProfessional/editProfessional/:professional_id" >
                {!user ? <Login/> : user.admin ? <AddProfessional/> : <PersonalArea/>}
            </Route>
            <Route exact path="/personal-area/adminProfessional/adminCandidates" >
                {!user ? <Login/> : user.admin ? <CandidatesList/> : <PersonalArea/>}
            </Route>
            <Route exact path="/personal-area/adminElders" >
                {!user ? <Login/> : user.admin ? <AdminElders/> : <PersonalArea/>}
            </Route>
            <Route exact path="/personal-area/adminElders/editElder/:elder_id" >
                {!user ? <Login/> : user.admin ? <CreateElder/> : <PersonalArea/>}
            </Route>
            
            <Route component={NotFound} />
        </Switch>

    )
}

export default AppRouter