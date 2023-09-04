import React, { useState } from 'react'
import '../App.css'
const List = (props) => {

    const [check,setCheck] = useState(false)

  return (

      <div 
        key={props.taskid}>
          <input type='checkbox' onClick={() => setCheck(!check)}></input>
          <p className = "list-items" style={{ textDecoration : check&&"line-through" , display : "inline-block" }}>{props.desc} </p> 
          <button onClick={() => props.deleteTask(props.taskid)}>Delete</button>
    </div>
  )
}

export default List
