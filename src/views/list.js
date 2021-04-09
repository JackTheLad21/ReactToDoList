import React from 'react';
import {ListGroup, Button} from 'react-bootstrap'
import {connect} from "react-redux";
import {removeToDo, editToDo, editState} from '../redux/actions'
import {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import Obj from '../components/object'



const ToDoList = (props) => (
    
        props.toDoList.map((curr, idx) => (
        <div className="list">
                <Obj
                    title={curr.title}
                    description={curr.description}
                    progress={curr.progress}
                    creationDate={curr.creationDate}
                    id={idx} 
                />  
                
                    <Button variant="danger" onClick={()=>props.removeToDo(curr.id)}>Rimuovi Task</Button>
                    <Button variant="primary" onClick={()=>props.editState()}>Modifica Stato</Button>

        </div>
        ))
    )

const mapStateToProps = state => ({
    toDoList: state.toDoList
  })
  
  const mapActionsToProps = {
    removeToDo: (value) => removeToDo(value),
    editToDo: (value, id) => editToDo(value, id),
    editState: (id) =>editState(id)
  }
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withRouter(ToDoList))
  

// export default ToDoList