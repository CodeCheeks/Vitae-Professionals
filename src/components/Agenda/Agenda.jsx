import React, { useEffect, useState } from 'react';
import AgendaCalender from 'react-agenda-calendar'
import 'react-agenda-calendar/dist/index.css'
import {getSectorActivities} from '../../services/activitiesService'


const Agenda = (props) => {

  const [agenda, setAgenda] = useState([])

  const changeFormat = (task) =>{
    let newtask = task
    let startDate = new Date(task.startDate)
    newtask.startDate={year: startDate.getFullYear(), month: startDate.getMonth(), day: startDate.getDate()}
    newtask.title = `${task.title} ${task.startHour}-${task.finishHour}`
    return newtask
  }

  useEffect(() => {
    let tasks = []
    console.log(props.section)
    getSectorActivities(props.section)
    .then(res => {
      console.log(res)
      res.forEach(task => tasks.push(changeFormat(task)))
      console.log(tasks)
      setAgenda(tasks)
    })
    .catch(error => console.log(error))
  }, [])

  return (
      <AgendaCalender agenda={agenda} currentDate={new Date()} />
  );
};

export default Agenda;


