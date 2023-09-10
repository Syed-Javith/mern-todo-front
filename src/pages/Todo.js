
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import axios from 'axios';
import List from '../components/List';
import { url } from '../url';

// import { UserContext } from '../App';

const Todo = () => {

  
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state?.user);
  const username = location?.state?.user.userName || "";
  const tasks = location?.state?.task || "";
  // console.log(tasks.task[0]);
  const [userid, setUserId] = useState(location.state?.user.userid || "");
  // console.log(userid);
  const [id , setId] = useState(0);
  const [desc , setDesc] = useState("");
  const [updatedTasks, setUpdatedTasks] = useState(tasks.task);



  if(userid === null || username === "" || userid === undefined || username === undefined){
    // alert("please login to continue");
    navigate('/login');
  }

  const addTask = (e) =>{
    e.preventDefault();
    const URL = `${url}user/${userid}/${id}`;
    console.log(URL);
    const data = {
      taskDesc : desc ,
    }
    setUpdatedTasks([...updatedTasks , { taskid : id  , taskDesc : desc , taskDate : new Date()}]);
    setId(0);
        setDesc('');
    axios.post(URL,data)
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });

  }


  function deleteTask(taskid){

    console.log("pressed " + taskid);
    
    const URL = `${url}user/${userid}/${taskid}`;

    console.log(URL);

    axios.patch(URL)
    .then((result) => {
      setUpdatedTasks(updatedTasks.filter((task) => task.taskid !== taskid));
      console.log(updatedTasks);
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  }
  
  return (
    <div>
      Todo {username}
      {  tasks.task && tasks.task.length > 0 ? updatedTasks.map((task)=>{
        return <List key={task.taskid} taskid = {task.taskid} desc={task.taskDesc} deleteTask={deleteTask}/>
      }) : <p>No Tasks yet</p>}

      <form onSubmit={(e)=> addTask(e)}>
        <input type='text' value={id} onChange={(event)=>  setId(event.target.value)} />
        <input type='text' value={desc} onChange={(event)=>  setDesc(event.target.value)} />
        <input type='submit' value="submit"/>
      </form>
    </div>
  )
}

export default Todo
